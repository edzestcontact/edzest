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
//   meetingId: String,
//  passcode: String,
// });

// module.exports = mongoose.model('Event', eventSchema);


// models/Event.js

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  speaker: String,
  linkedin: String,
  date: String,
  time: String,
  link: String,

  // ✅ Store Cloudinary URL
  wallpaper: String,

  meetingId: String,
  passcode: String,
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
