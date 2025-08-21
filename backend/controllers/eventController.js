const Event = require("../models/Event");
const cloudinary = require("../cloudinary"); // ← make sure this file exists

// ✅ POST - Create Event
exports.createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      time,
      type, // ok to accept even if not in schema
      speaker,
      link,
      linkedin,
    } = req.body;

    // multer-storage-cloudinary provides:
    // req.file.path  -> secure Cloudinary URL
    // req.file.filename -> Cloudinary public_id
    const wallpaperUrl = req.file ? req.file.path : null;
    const wallpaperPublicId = req.file ? req.file.filename : null;

    const newEvent = new Event({
      title,
      description,
      date,
      time,
      type,
      speaker,
      link,
      linkedin,
      wallpaperUrl, // ✅ permanent URL (CDN)
      wallpaperPublicId, // ✅ for later deletion/replacement
    });

    await newEvent.save();
    console.log("✅ Event created with image:", wallpaperUrl);
    res
      .status(201)
      .json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    console.error("❌ Error creating event:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ✅ GET - Fetch All Events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (error) {
    console.error("❌ Failed to fetch events:", error);
    res.status(500).json({ message: "Failed to fetch events" });
  }
};

// ✅ PUT - Update Event (optionally replace wallpaper)
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = { ...req.body };

    // If a new wallpaper is uploaded, delete the old image on Cloudinary first
    if (req.file) {
      const current = await Event.findById(id).lean();
      if (!current) return res.status(404).json({ message: "Event not found" });

      if (current.wallpaperPublicId) {
        try {
          await cloudinary.uploader.destroy(current.wallpaperPublicId);
        } catch (e) {
          console.warn("⚠️ Cloudinary delete (old) failed:", e?.message);
        }
      }

      updateFields.wallpaperUrl = req.file.path; // new CDN URL
      updateFields.wallpaperPublicId = req.file.filename; // new public_id
    }

    const updated = await Event.findByIdAndUpdate(id, updateFields, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Event not found" });

    res.json({ message: "Updated successfully", event: updated });
  } catch (error) {
    console.error("❌ Error updating event:", error);
    res.status(500).json({ message: "Update failed" });
  }
};

// ✅ DELETE - Delete Event (and its wallpaper on Cloudinary)
exports.deleteEvent = async (req, res) => {
  try {
    const ev = await Event.findById(req.params.id);
    if (!ev) return res.status(404).json({ message: "Event not found" });

    if (ev.wallpaperPublicId) {
      try {
        await cloudinary.uploader.destroy(ev.wallpaperPublicId);
      } catch (e) {
        console.warn("⚠️ Cloudinary delete failed:", e?.message);
      }
    }

    await ev.deleteOne();
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting event:", error);
    res.status(500).json({ message: "Deletion failed" });
  }
};
