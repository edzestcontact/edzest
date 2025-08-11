// utils/reminderScheduler.js
const cron = require("node-cron");
const Event = require("../models/Event");
const Registration = require("../models/Registration");
const nodemailer = require("nodemailer");
require("dotenv").config();

// ✅ Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Send reminder email
const sendReminderEmail = (to, event, hoursBefore) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: `Reminder: ${event.title} starts in ${hoursBefore} hour${hoursBefore > 1 ? 's' : ''}`,
    text: `Hello,\n\nThis is a reminder that the event "${event.title}" will start on ${event.date} at ${event.time}.\n\nDetails:\n${event.description}\n\nJoin here: ${event.link}\n\n— Edzest Team`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.error("❌ Error sending reminder:", error);
    else console.log(`✅ Reminder sent to ${to} (${hoursBefore} hrs before)`);
  });
};

// ✅ Cron job every 15 minutes
cron.schedule("*/15 * * * *", async () => {
  console.log("⏳ Checking for upcoming events...");

  try {
    const now = new Date();

    // 1 hour & 24 hours before reminders
    const reminders = [
      { hoursBefore: 1 },
      { hoursBefore: 24 }
    ];

    for (const reminder of reminders) {
      // Get all upcoming events
      const events = await Event.find();

      for (const event of events) {
        // Convert stored date + time (strings) into Date object
        const eventDateTime = new Date(`${event.date} ${event.time}`);

        // Time difference in milliseconds
        const diffMs = eventDateTime - now;
        const diffHours = diffMs / (1000 * 60 * 60);

        // Check if within a 15-min window for reminder
        if (diffHours > (reminder.hoursBefore - 0.25) && diffHours <= reminder.hoursBefore) {
          const registrations = await Registration.find({ eventId: event._id });

          registrations.forEach(reg => {
            sendReminderEmail(reg.email, event, reminder.hoursBefore);
          });
        }
      }
    }
  } catch (err) {
    console.error("❌ Error in reminder scheduler:", err);
  }
});
