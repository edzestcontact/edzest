const router = require('express').Router();
const multer = require('multer');
const cloudinary = require("../config/cloudinary");

// Keep files in memory -> stream to Cloudinary (no local disk)
const upload = multer({ storage: multer.memoryStorage() });

// POST /api/upload  (form field name: "image")
router.post('/', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    // Stream buffer to Cloudinary
    const uploaded = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: 'events',            // organize in a folder
          resource_type: 'image',      // or 'auto' if you may upload pdf/video
          // public_id: 'optional-custom-slug', // uncomment to control filename
          // overwrite: true,
        },
        (err, result) => (err ? reject(err) : resolve(result))
      );
      stream.end(req.file.buffer);
    });

    res.json({
      message: 'Uploaded to Cloudinary',
      url: uploaded.secure_url,       // ✅ save this in MongoDB
      public_id: uploaded.public_id,  // ✅ keep this if you want to delete later
    });
  } catch (e) {
    console.error('Cloudinary upload failed:', e);
    res.status(500).json({ error: 'Cloudinary upload failed' });
  }
});

module.exports = router;
