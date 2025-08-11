// const express = require('express');
// const router = express.Router();
// const multer = require("multer");
// const eventController = require('../controllers/eventController');
// const Event = require('../models/Event');

// // ✅ Fix: use diskStorage so file gets saved to /uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueName = Date.now() + "_" + file.originalname;
//     cb(null, uniqueName);
//   },
// });
// const upload = multer({ storage });

// // ✅ POST - Create Event
// router.post('/', upload.single("wallpaper"), eventController.createEvent);

// // ✅ GET - All Events
// router.get('/', eventController.getAllEvents);

// // ✅ GET - Single Event
// router.get('/:id', async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id);
//     if (!event) return res.status(404).json({ message: 'Event not found' });
//     res.json(event);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ PUT - Update Event
// // router.put('/:id', eventController.updateEvent);

// router.put('/:id', upload.single("wallpaper"), eventController.updateEvent);

// // ✅ DELETE - Delete Event
// router.delete('/:id', eventController.deleteEvent);

// module.exports = router;

// routes/eventRoutes.js

// routes/eventRoutes.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const eventController = require("../controllers/eventController");
const Event = require("../models/Event");

// ✅ Memory storage for Cloudinary uploads (no disk usage)
const upload = multer({ storage: multer.memoryStorage() });

// Create
router.post("/", upload.single("wallpaper"), eventController.createEvent);

// List all
router.get("/", eventController.getAllEvents);

// Get one
router.get("/:id", eventController.getEventById);

// Optional: get wallpaper URL (your existing route)
router.get("/:id/wallpaper", async (req, res) => {
  try {
    const ev = await Event.findById(req.params.id).select("wallpaper");
    if (!ev || !ev.wallpaper) return res.status(404).end();
    res.json({ wallpaperUrl: ev.wallpaper });
  } catch (err) {
    console.error("❌ Error serving wallpaper:", err);
    res.status(500).end();
  }
});

// Update
router.put("/:id", upload.single("wallpaper"), eventController.updateEvent);

// Delete
router.delete("/:id", eventController.deleteEvent);

module.exports = router;
