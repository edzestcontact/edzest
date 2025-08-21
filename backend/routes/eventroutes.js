


// routes/eventRoutes.js
const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');
const Event = require('../models/Event');

// ⬇️ Use Cloudinary-backed multer (NOT local disk)
const upload = require('../utils/cloudinaryMulter'); // make sure this file exists

// ✅ POST - Create Event (field name MUST be 'wallpaper')
router.post('/', upload.single('wallpaper'), eventController.createEvent);

// ✅ GET - All Events
router.get('/', eventController.getAllEvents);

// ✅ GET - Single Event
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ PUT - Update Event (optionally replace wallpaper)
router.put('/:id', upload.single('wallpaper'), eventController.updateEvent);

// ✅ DELETE - Delete Event
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
