const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendEmail = ({ to, subject, text }) => {
  return transporter.sendMail({
    from: `"Edzest Events" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    text,
  });
};

module.exports = sendEmail;
