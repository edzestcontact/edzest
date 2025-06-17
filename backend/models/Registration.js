// // models/Registration.js
// const mongoose = require('mongoose');

// const RegistrationSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   remarks: String,
//   eventTitle: String,
//   eventDate: String,
//   eventLink: String,
// }, { timestamps: true });

// module.exports = mongoose.model('Registration', RegistrationSchema);


// models/Registration.js
const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  remarks: String,
  eventTitle: String,
  eventDate: String,
  eventTime: String,           // ✅ added
  eventSpeaker: String,        // ✅ added
  eventDescription: String,    // ✅ added
  eventLink: String,           // ✅ (Zoom link)
  linkedin: String             // ✅ optional
}, { timestamps: true });

module.exports = mongoose.models.Registration || mongoose.model('Registration', RegistrationSchema);
