const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 100 },
  content: { type: String, required: true },
  author: { type: String, required: true },
  dept: { type: String },
  img: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Blog", blogSchema);
