require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer"); // Import Multer
const path = require("path");

const app = express();

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));

// CORS Configuration: Enable CORS for the frontend (localhost:3000) and backend
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://your-frontend-domain.com', // Replace with actual frontend URL
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin like mobile apps or curl
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS policy: This origin is not allowed'), false);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));


app.use((req, res, next) => {
  console.log("Incoming origin:", req.headers.origin);
  next();
});

// Allow preflight requests (handle OPTIONS requests)
app.options('*', cors());  // This will handle the OPTIONS requests for preflight checks

// Connect to MongoDB using environment variable
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ------------------ SCHEMAS ------------------

// Career Form Schema
const CareerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    experience: String,
    linkedin: String,
    careerAspiration: String,
    interviewAssistance: String,
    resumePath: String,
  },
  { timestamps: true }
);
const Career = mongoose.model("Career", CareerSchema);

// Contact Form Schema
const ContactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);
const Contact = mongoose.model("Contact", ContactSchema);

// ------------------ FILE UPLOAD CONFIGURATION ------------------

// Multer storage configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");  // Store uploaded files in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // File naming convention with timestamp
  },
});

// Define the upload middleware
const upload = multer({ storage });

// ------------------ ROUTES ------------------

// Example Event Route (Keep this as-is)
const eventRoutes = require("./routes/eventroutes");
app.use("/api/events", eventRoutes);

// Nodemailer setup for sending email notifications
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Handle Career Form (with file upload)
app.post("/submit-career-form", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, experience, linkedin, careerAspiration, interviewAssistance } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Resume file is required." });
    }

    const resumePath = req.file.path;

    const newCareer = await Career.create({
      name,
      email,
      experience,
      linkedin,
      careerAspiration,
      interviewAssistance,
      resumePath,
    });

    res.status(200).json({ message: "Form submitted successfully!" });

    setImmediate(() => {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: "New Career Development Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nExperience: ${experience}\nLinkedIn: ${linkedin}\nCareer Aspiration: ${careerAspiration}\nInterview Assistance: ${interviewAssistance}`,
        attachments: resumePath
          ? [{ filename: path.basename(resumePath), path: resumePath }]
          : [],
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("❌ Error Sending Email:", error);
        } else {
          console.log("✅ Email Sent:", info.response);
        }
      });
    });
  } catch (error) {
    console.error("❌ Error Submitting Career Form:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Handle Contact Form (without file upload)
app.post("/api/contact", async (req, res) => {
  const { fullName, email, phoneNumber, message } = req.body;

  if (!fullName || !email || !phoneNumber || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Save the contact form data to the database
    const newContact = new Contact({ fullName, email, phoneNumber, message });
    await newContact.save().catch((err) => console.error("Error saving contact:", err));

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // You can use any email here for notification
      subject: `New Contact Form Submission from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`,
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

// Optional: Test DB connection
app.get("/check-db", async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    res.json({ status: "Connected", collections });
  } catch (err) {
    res.status(500).json({ status: "Error", message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
