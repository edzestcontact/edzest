// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const multer = require("multer");
// const path = require("path");

// const app = express();

// // ✅ Define allowed origins
// const allowedOrigins = [
//   "http://localhost:3000",
//   "https://vercel.com/akanksha9033s-projects/edzestweb-ypsr",
//   "https://www.edzest.org"
// ];

// // ✅ CORS Options
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("🌐 Incoming origin:", origin);
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("CORS not allowed"), false);
//     }
//   },
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// };

// // ✅ Apply CORS middleware BEFORE everything else
// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); // Preflight handling

// // ✅ Apply body parser
// app.use(express.json({ limit: '10mb' }));
// app.use(bodyParser.json({ limit: '10mb' }));

// // ✅ Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // ✅ Import and use analytics route
// const analyticsRoutes = require('./routes/analytics');
// app.use('/api', analyticsRoutes);

// // ------------------ SCHEMAS ------------------

// // Career Form Schema
// const CareerSchema = new mongoose.Schema(
//   {
//     name: String,
//     email: String,
//     experience: String,
//     linkedin: String,
//     careerAspiration: String,
//     interviewAssistance: String,
//     resumePath: String,
//   },
//   { timestamps: true }
// );
// const Career = mongoose.model("Career", CareerSchema);

// // Contact Form Schema
// const ContactSchema = new mongoose.Schema(
//   {
//     fullName: { type: String, required: true },
//     email: { type: String, required: true },
//     phoneNumber: { type: String, required: true },
//     message: { type: String, required: true },
//   },
//   { timestamps: true }
// );
// const Contact = mongoose.model("Contact", ContactSchema);

// // ------------------ FILE UPLOAD CONFIGURATION ------------------

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

// // ------------------ ROUTES ------------------

// const eventRoutes = require("./routes/eventroutes");
// app.use("/api/events", eventRoutes);

// const registerRoutes = require('./routes/registerRoute');
// app.use('/api/register', registerRoutes);

// // ✅ Nodemailer
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // ✅ Career Form with file upload
// app.post("/submit-career-form", upload.single("resume"), async (req, res) => {
//   try {
//     const { name, email, experience, linkedin, careerAspiration, interviewAssistance } = req.body;

//     if (!req.file) {
//       return res.status(400).json({ message: "Resume file is required." });
//     }

//     const resumePath = req.file.path;

//     const newCareer = await Career.create({
//       name,
//       email,
//       experience,
//       linkedin,
//       careerAspiration,
//       interviewAssistance,
//       resumePath,
//     });

//     res.status(200).json({ message: "Form submitted successfully!" });

//     setImmediate(() => {
//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: process.env.EMAIL_TO,
//         subject: "New Career Development Form Submission",
//         text: `Name: ${name}\nEmail: ${email}\nExperience: ${experience}\nLinkedIn: ${linkedin}\nCareer Aspiration: ${careerAspiration}\nInterview Assistance: ${interviewAssistance}`,
//         attachments: resumePath
//           ? [{ filename: path.basename(resumePath), path: resumePath }]
//           : [],
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error("❌ Error Sending Email:", error);
//         } else {
//           console.log("✅ Email Sent:", info.response);
//         }
//       });
//     });
//   } catch (error) {
//     console.error("❌ Error Submitting Career Form:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ✅ Contact Form (without file upload)
// app.post("/api/contact", async (req, res) => {
//   const { fullName, email, phoneNumber, message } = req.body;

//   if (!fullName || !email || !phoneNumber || !message) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   try {
//     const newContact = new Contact({ fullName, email, phoneNumber, message });
//     await newContact.save().catch((err) => console.error("Error saving contact:", err));

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_TO,
//       subject: `New Contact Form Submission from ${fullName}`,
//       text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) console.error("❌ Error Sending Email:", error);
//       else console.log("✅ Email Sent:", info.response);
//     });

//     res.status(200).json({ message: "Form submitted successfully!" });
//   } catch (error) {
//     console.error("❌ Error Submitting Contact Form:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ✅ Test DB connection
// app.get("/check-db", async (req, res) => {
//   try {
//     const collections = await mongoose.connection.db.listCollections().toArray();
//     res.json({ status: "Connected", collections });
//   } catch (err) {
//     res.status(500).json({ status: "Error", message: err.message });
//   }
// });

// // ✅ Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const app = express();

// ✅ Define allowed origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://edzestweb.vercel.app",
  "www.edzest.org"
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

// ✅ Apply CORS middleware BEFORE everything else
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Preflight handling

// ✅ Apply body parser
app.use(express.json({ limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));

// ✅ Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/data", express.static(path.join(__dirname, "data"))); // ✅ Added from first server.js

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Import and use analytics route
const analyticsRoutes = require('./routes/analytics');
app.use('/api', analyticsRoutes);

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

// ✅ Event & Registration Models (from 1st server.js, required for event features)
const Event = require("./models/Event");
const Registration = require("./models/Registration");

// ------------------ FILE UPLOAD CONFIGURATION ------------------

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

// ------------------ ROUTES ------------------

const eventRoutes = require("./routes/eventroutes");
app.use("/api/events", eventRoutes);

const registerRoutes = require('./routes/registrationRoutes');
app.use('/api/register', registerRoutes);

// ✅ Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Career Form with file upload
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

// ✅ Contact Form (without file upload)
app.post("/api/contact", async (req, res) => {
  const { fullName, email, phoneNumber, message } = req.body;

  if (!fullName || !email || !phoneNumber || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newContact = new Contact({ fullName, email, phoneNumber, message });
    await newContact.save().catch((err) => console.error("Error saving contact:", err));

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
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

// ✅ Test DB connection
app.get("/check-db", async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    res.json({ status: "Connected", collections });
  } catch (err) {
    res.status(500).json({ status: "Error", message: err.message });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
