const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String, // 
  speaker: String,
  linkedin: String,
  date: String,
  time: String,
  link: String,
  wallpaper: String,
});

module.exports = mongoose.model('Event', eventSchema);
