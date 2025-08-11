// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//   title: String,
//   description: String, // 
//   speaker: String,
//   linkedin: String,
//   date: String,
//   time: String,
//   link: String,
//   wallpaper: String,
// });

// module.exports = mongoose.model('Event', eventSchema);

const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    date: String,     // or Date, if you already use Date
    time: String,
    type: String,
    speaker: String,
    link: String,
    linkedin: String,
    meetingId: String,
    passcode: String,

    // New for Cloudinary
    wallpaperUrl: String,
    wallpaperPublicId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
