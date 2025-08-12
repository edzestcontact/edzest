const express = require("express");
const Blog = require("../models/Blog");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// 🔧 Ensure uploads folder exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// ⚙️ Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // unique filename
  },
});

const upload = multer({ storage });

// ✅ Image Upload Endpoint
router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});

// ✅ CREATE blog
router.post("/create", async (req, res) => {
  try {
    const { title, content, author, dept, img } = req.body;

    if (!title || !content || !author || !dept || !img) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const blog = new Blog({ title, content, author, dept, img });
    await blog.save();

    res.status(201).json(blog);
  } catch (err) {
    console.error("❌ Blog creation error:", err);
    res.status(500).json({ message: "Server error while creating blog." });
  }
});

// ✅ UPDATE blog
router.put('/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (err) {
    console.error("❌ Blog update error:", err);
    res.status(500).json({ message: "Server error while updating blog." });
  }
});

// ✅ DELETE blog
router.delete('/:id', async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    console.error("❌ Blog delete error:", err);
    res.status(500).json({ message: "Server error while deleting blog." });
  }
});

// ✅ GET all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    console.error("❌ Blog fetch error:", err);
    res.status(500).json({ message: "Server error while fetching blogs." });
  }
});

// ✅ GET blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (err) {
    console.error("❌ Blog fetch by ID error:", err);
    res.status(500).json({ message: "Server error while fetching blog." });
  }
});

module.exports = router;
