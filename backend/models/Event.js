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


const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  speaker: String,
  linkedin: String,
  date: String,
  time: String,
  link: String,

  // ✅ Backward-compat (UI agar 'wallpaper' padhta hai to bhi chale)
  wallpaper: { type: String },

  // ✅ Cloudinary fields (permanent)
  wallpaperUrl: { type: String },
  wallpaperPublicId: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
