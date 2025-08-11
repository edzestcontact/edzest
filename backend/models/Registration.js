// const mongoose = require('mongoose');

// const registrationSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   remarks: String,
//   eventId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Event',
//   },
// });

// module.exports = mongoose.model('Registration', registrationSchema);


// models/Registration.js
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  remarks: String,
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  },
  sentOneDay: { type: Boolean, default: false },
  sentOneHour: { type: Boolean, default: false }
});

module.exports = mongoose.model('Registration', registrationSchema);
