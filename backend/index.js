require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const app = express();

// ✅ Allowed origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://edzestweb-ypsr.vercel.app",
  "https://www.edzest.org"
];

// ✅ CORS Options
const corsOptions = {
  origin: function (origin, callback) {
    console.log("🌐 Incoming origin:", origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"), false);
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

// ✅ Apply middlewares
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));

// ✅ Static file serving
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/data", express.static(path.join(__dirname, "data")));

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Analytics Route
const analyticsRoutes = require('./routes/analytics');
app.use('/api', analyticsRoutes);

// ✅ Event Routes
const eventRoutes = require("./routes/eventroutes");
app.use("/api/events", eventRoutes);

// ✅ Registration Routes (✅ SINGLE declaration)
const registerRoutes = require('./routes/registrationRoutes');
app.use('/api/register', registerRoutes);

// ✅ Schemas
const Career = mongoose.model("Career", new mongoose.Schema({
  name: String,
  email: String,
  experience: String,
  linkedin: String,
  careerAspiration: String,
  interviewAssistance: String,
  resumePath: String,
}, { timestamps: true }));

const Contact = mongoose.model("Contact", new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true }));

const Event = require("./models/Event");
const Registration = require("./models/Registration");

// ✅ File upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`)
});
const upload = multer({ storage });

// ✅ Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Career Form with Resume Upload
app.post("/submit-career-form", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, experience, linkedin, careerAspiration, interviewAssistance } = req.body;
    if (!req.file) return res.status(400).json({ message: "Resume file is required." });

    const newCareer = await Career.create({
      name, email, experience, linkedin, careerAspiration, interviewAssistance,
      resumePath: req.file.path,
    });

    res.status(200).json({ message: "Form submitted successfully!" });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Career Development Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nExperience: ${experience}\nLinkedIn: ${linkedin}\nCareer Aspiration: ${careerAspiration}\nInterview Assistance: ${interviewAssistance}`,
      attachments: [{ filename: path.basename(req.file.path), path: req.file.path }]
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.error("❌ Error Sending Email:", error);
      else console.log("✅ Email Sent:", info.response);
    });

  } catch (error) {
    console.error("❌ Error Submitting Career Form:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Contact Form
app.post("/api/contact", async (req, res) => {
  const { fullName, email, phoneNumber, message } = req.body;
  if (!fullName || !email || !phoneNumber || !message)
    return res.status(400).json({ message: "All fields are required." });

  try {
    const newContact = new Contact({ fullName, email, phoneNumber, message });
    await newContact.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.error("❌ Error Sending Email:", error);
      else console.log("✅ Email Sent:", info.response);
    });

    res.status(200).json({ message: "Form submitted successfully!" });

  } catch (error) {
    console.error("❌ Error Submitting Contact Form:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ DB Test Endpoint
app.get("/check-db", async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    res.json({ status: "Connected", collections });
  } catch (err) {
    res.status(500).json({ status: "Error", message: err.message });
  }
});

// ✅ Global error handler (optional)
app.use((err, req, res, next) => {
  console.error("🛑 Unhandled Error:", err);
  res.status(500).json({ message: "Internal server error" });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
