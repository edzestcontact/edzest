// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// module.exports = transporter;

const nodemailer = require('nodemailer');

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// Debug log at startup to verify env vars (optional, remove in prod if you like)
console.log("📧 Mailer env check:", {
  EMAIL_USER,
  EMAIL_PASS: EMAIL_PASS ? '******' : 'undefined'
});

// Validate env vars at startup
if (!EMAIL_USER || !EMAIL_PASS) {
  console.warn("⚠️ EMAIL_USER or EMAIL_PASS is missing. Emails will fail unless this is fixed.");
}

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Verify transporter connection on startup (optional, but good practice)
transporter.verify(function (error, success) {
  if (error) {
    console.error("❌ Mailer connection failed:", error.message);
  } else {
    console.log("✅ Mailer is ready to send emails.");
  }
});

module.exports = transporter;
