

// const Event = require("../models/Event");
// const cloudinary = require("cloudinary").v2;

// // ✅ Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Create Event
// exports.createEvent = async (req, res) => {
//   try {
//     let wallpaperUrl = "";

//     if (req.file) {
//       const uploadResult = await cloudinary.uploader.upload_stream(
//         { folder: "events" },
//         (error, result) => {
//           if (error) throw error;
//           wallpaperUrl = result.secure_url;
//         }
//       );
//       await new Promise((resolve, reject) => {
//         const stream = cloudinary.uploader.upload_stream(
//           { folder: "events" },
//           (error, result) => {
//             if (error) reject(error);
//             else {
//               wallpaperUrl = result.secure_url;
//               resolve();
//             }
//           }
//         );
//         stream.end(req.file.buffer);
//       });
//     }

//     const event = new Event({
//       ...req.body,
//       wallpaper: wallpaperUrl || "",
//     });

//     await event.save();
//     res.status(201).json(event);
//   } catch (err) {
//     console.error("❌ Error creating event:", err);
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get all Events
// exports.getAllEvents = async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.json(events);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get Event by ID
// exports.getEventById = async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id);
//     if (!event) return res.status(404).json({ error: "Event not found" });
//     res.json(event);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Update Event
// exports.updateEvent = async (req, res) => {
//   try {
//     let updateData = { ...req.body };

//     if (req.file) {
//       let wallpaperUrl = "";
//       await new Promise((resolve, reject) => {
//         const stream = cloudinary.uploader.upload_stream(
//           { folder: "events" },
//           (error, result) => {
//             if (error) reject(error);
//             else {
//               wallpaperUrl = result.secure_url;
//               resolve();
//             }
//           }
//         );
//         stream.end(req.file.buffer);
//       });
//       updateData.wallpaper = wallpaperUrl;
//     }

//     const updatedEvent = await Event.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true }
//     );

//     if (!updatedEvent) return res.status(404).json({ error: "Event not found" });
//     res.json(updatedEvent);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Delete Event
// exports.deleteEvent = async (req, res) => {
//   try {
//     const deletedEvent = await Event.findByIdAndDelete(req.params.id);
//     if (!deletedEvent) return res.status(404).json({ error: "Event not found" });
//     res.json({ message: "Event deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// controllers/eventController.js
const Event = require("../models/Event");
const cloudinary = require("../config/cloudinary"); // ✅ use centralized config

// helper: upload a memory buffer to Cloudinary and return result
const uploadBufferToCloudinary = (buffer, folder = "events") =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    stream.end(buffer);
  });

// Create Event
exports.createEvent = async (req, res) => {
  try {
    let wallpaperUrl = "";

    if (req.file && req.file.buffer) {
      const result = await uploadBufferToCloudinary(req.file.buffer, "events");
      wallpaperUrl = result.secure_url; // ✅ permanent Cloudinary URL
    }

    const event = new Event({
      ...req.body,
      wallpaper: wallpaperUrl || "", // ✅ matches your schema field
    });

    await event.save();
    res.status(201).json(event);
  } catch (err) {
    console.error("❌ Error creating event:", err);
    res.status(500).json({ error: err.message });
  }
};

// Get all Events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Event
exports.updateEvent = async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.file && req.file.buffer) {
      const result = await uploadBufferToCloudinary(req.file.buffer, "events");
      updateData.wallpaper = result.secure_url; // ✅ replace URL if new file
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedEvent) return res.status(404).json({ error: "Event not found" });
    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) return res.status(404).json({ error: "Event not found" });
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
