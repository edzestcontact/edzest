// backend/middleware/acceptEventBody.js
// Accepts either JSON (with wallpaper as base64 Data URL) or multipart/form-data
// WITHOUT multer. If multipart is used, we read the file and convert to base64 Data URL.
// Result: req.body has { ...fields, wallpaper } exactly like JSON flow.

const Busboy = require("busboy");

function fileToDataUrl(buffer, mime = "image/jpeg") {
  const base64 = buffer.toString("base64");
  return `data:${mime};base64,${base64}`;
}

module.exports = function acceptEventBody(req, res, next) {
  const ct = req.headers["content-type"] || "";

  // JSON / urlencoded (already parsed by express.json/urlencoded)
  if (!ct.startsWith("multipart/form-data")) {
    return next();
  }

  // Handle multipart/form-data with Busboy
  try {
    const busboy = Busboy({ headers: req.headers, limits: { fileSize: 15 * 1024 * 1024 } }); // 15MB guard
    const fields = {};
    let wallpaperDataUrl = null;

    busboy.on("field", (name, val) => {
      fields[name] = val;
    });

    busboy.on("file", (name, file, info) => {
      const { mimeType } = info || {};
      const chunks = [];
      file.on("data", (d) => chunks.push(d));
      file.on("limit", () => {
        file.unpipe();
        return res.status(413).json({ message: "Poster too large" });
      });
      file.on("end", () => {
        const buf = Buffer.concat(chunks);
        if (name === "wallpaper" && buf.length) {
          wallpaperDataUrl = fileToDataUrl(buf, mimeType || "image/jpeg");
        }
      });
    });

    busboy.on("finish", () => {
      // Normalize into req.body exactly like JSON path
      req.body = {
        ...fields,
        ...(wallpaperDataUrl ? { wallpaper: wallpaperDataUrl } : {}),
      };
      return next();
    });

    req.pipe(busboy);
  } catch (e) {
    console.error("Busboy parse error:", e);
    return res.status(400).json({ message: "Invalid multipart payload" });
  }
};
