


          // const Event = require("../models/Event");

          // // ✅ POST - Create Event
          // exports.createEvent = async (req, res) => {
          //   try {
          //     const {
          //       title,
          //       description,
          //       date,
          //       time,
          //       type,
          //       speaker,
          //       link,
          //       linkedin,
          //     } = req.body;

          //     const wallpaperUrl = req.file
          //       ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
          //       : null;

          //       console.log("🖼️ req.file = ", req.file);
          // console.log("✅ Wallpaper URL:", wallpaperUrl);

          //     const newEvent = new Event({
          //       title,
          //       description,
          //       date,
          //       time,
          //       type,
          //       speaker,
          //       link,
          //       linkedin,
          //       wallpaper: wallpaperUrl, // ✅ only fix added
          //     });

          //     await newEvent.save();
          //     console.log("✅ Event created with image:", wallpaperUrl);
          //     res.status(201).json({ message: "Event created successfully" });
          //   } catch (error) {
          //     console.error("❌ Error creating event:", error);
          //     res.status(500).json({ message: "Server Error" });
          //   }
          // };

          // // ✅ GET - Fetch All Events
          // exports.getAllEvents = async (req, res) => {
          //   try {
          //     const events = await Event.find().sort({ createdAt: -1 });
          //     res.json(events);
          //   } catch (error) {
          //     res.status(500).json({ message: "Failed to fetch events" });
          //   }
          // };

          // // ✅ PUT - Update Event
          // exports.updateEvent = async (req, res) => {
          //   try {
          //     const updateFields = { ...req.body };

          //     // ✅ If a new wallpaper file is uploaded, handle it
          //     if (req.file) {
          //       const wallpaperUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
          //       updateFields.wallpaper = wallpaperUrl;
          //     }

          //     const updated = await Event.findByIdAndUpdate(req.params.id, updateFields, { new: true });
          //     res.json(updated);
          //   } catch (error) {
          //     console.error("❌ Error updating event:", error);
          //     res.status(500).json({ message: "Update failed" });
          //   }
          // };

          // // ✅ DELETE - Delete Event
          // exports.deleteEvent = async (req, res) => {
          //   try {
          //     await Event.findByIdAndDelete(req.params.id);
          //     res.json({ message: "Deleted successfully" });
          //   } catch (error) {
          //     res.status(500).json({ message: "Deletion failed" });
          //   }
          // };


          const Event = require("../models/Event");
const cloudinary = require("../config/cloudinary");

// Configure Cloudinary from environment
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Helper: upload a buffer to Cloudinary (with timing + logs)
const uploadFromBuffer = (buffer, folder = "events") =>
  new Promise((resolve, reject) => {
    const t0 = Date.now();
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (err, result) => {
        if (err) return reject(err);
        console.log(
          `☁️  [${Date.now() - t0}ms] Cloudinary uploaded`,
          { public_id: result.public_id, bytes: result.bytes, w: result.width, h: result.height }
        );
        resolve(result);
      }
    );
    stream.end(buffer);
  });

exports.createEvent = async (req, res) => {
  try {
    // ---- DEBUG START ----
    console.log(`➡️  [${req.reqId || "-"}] POST /api/events ct=${req.headers["content-type"] || "-"}`);
    console.log(`🧪 Body keys:`, Object.keys(req.body || {}));
    console.log(`🧪 File present:`, !!req.file, req.file?.mimetype, req.file?.size);
    console.log(`🔐 Cloudinary envs:`, {
      CLOUD_NAME: !!process.env.CLOUDINARY_CLOUD_NAME,
      API_KEY: !!process.env.CLOUDINARY_API_KEY,
      API_SECRET: !!process.env.CLOUDINARY_API_SECRET,
    });
    // ---- DEBUG END ----

    const {
      title,
      description,
      date,
      time,
      type,
      speaker,
      link,
      linkedin,
      meetingId,
      passcode,
    } = req.body;

    let wallpaperUrl = null;
    let wallpaperPublicId = null;

    if (req.file && req.file.buffer) {
      const uploaded = await uploadFromBuffer(req.file.buffer, "events");
      wallpaperUrl = uploaded.secure_url;
      wallpaperPublicId = uploaded.public_id;
      console.log(`✅ Poster uploaded: ${wallpaperPublicId}`);
    } else {
      console.log(`ℹ️ No file buffer received; saving without poster`);
    }

    const event = await Event.create({
      title,
      description,
      date,
      time,
      type,
      speaker,
      link,
      linkedin,
      meetingId,
      passcode,
      wallpaperUrl,
      wallpaperPublicId,
    });

    console.log(`✅ Event created: ${event._id}`);
    res.status(201).json(event);
  } catch (err) {
    console.error(`💥 createEvent failed:`, { name: err.name, message: err.message, stack: err.stack });
    res.status(500).json({ message: "Failed to create event", error: err.message });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    console.log(`➡️  GET /api/events`);
    const events = await Event.find().sort({ createdAt: -1 });
    console.log(`✅ Fetched events: ${events.length}`);
    res.json(events);
  } catch (err) {
    console.error("💥 getAllEvents failed:", { name: err.name, message: err.message });
    res.status(500).json({ message: "Failed to fetch events", error: err.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    console.log(`➡️  GET /api/events/${req.params.id}`);
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    console.log(`✅ Event found: ${event._id}`);
    res.json(event);
  } catch (err) {
    console.error("💥 getEventById failed:", { name: err.name, message: err.message });
    res.status(500).json({ message: "Failed to fetch event", error: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    console.log(`➡️  [${req.reqId || "-"}] PUT /api/events/${req.params.id}`);
    console.log(`🧪 UPDATE file present:`, !!req.file, req.file?.mimetype, req.file?.size);

    const id = req.params.id;
    const existing = await Event.findById(id);
    if (!existing) return res.status(404).json({ message: "Event not found" });

    const {
      title,
      description,
      date,
      time,
      type,
      speaker,
      link,
      linkedin,
      meetingId,
      passcode,
    } = req.body;

    const update = { title, description, date, time, type, speaker, link, linkedin, meetingId, passcode };

    if (req.file && req.file.buffer) {
      const uploaded = await uploadFromBuffer(req.file.buffer, "events");
      update.wallpaperUrl = uploaded.secure_url;
      update.wallpaperPublicId = uploaded.public_id;

      if (existing.wallpaperPublicId) {
        cloudinary.uploader.destroy(existing.wallpaperPublicId)
          .then(() => console.log(`🧹 Old poster removed: ${existing.wallpaperPublicId}`))
          .catch(() => console.log(`⚠️ Failed to remove old poster: ${existing.wallpaperPublicId}`));
      }
    }

    const saved = await Event.findByIdAndUpdate(id, update, { new: true });
    console.log(`✅ Event updated: ${saved._id}`);
    res.json(saved);
  } catch (err) {
    console.error(`💥 updateEvent failed:`, { name: err.name, message: err.message, stack: err.stack });
    res.status(500).json({ message: "Failed to update event", error: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    console.log(`➡️  DELETE /api/events/${req.params.id}`);
    const id = req.params.id;
    const existing = await Event.findById(id);
    if (!existing) return res.status(404).json({ message: "Event not found" });

    if (existing.wallpaperPublicId) {
      await cloudinary.uploader.destroy(existing.wallpaperPublicId)
        .then(() => console.log(`🧹 Poster deleted: ${existing.wallpaperPublicId}`))
        .catch(() => console.log(`⚠️ Failed to delete poster: ${existing.wallpaperPublicId}`));
    }

    await Event.findByIdAndDelete(id);
    console.log(`✅ Event deleted: ${id}`);
    res.json({ ok: true });
  } catch (err) {
    console.error("💥 deleteEvent failed:", { name: err.name, message: err.message, stack: err.stack });
    res.status(500).json({ message: "Failed to delete event", error: err.message });
  }
};
