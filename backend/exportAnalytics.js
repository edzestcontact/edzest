// exportAnalytics.js
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();

const analyticsSchema = new mongoose.Schema({}, { strict: false });
const Analytics = mongoose.model('Analytics', analyticsSchema);

async function exportToCSV() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const data = await Analytics.find().lean();
    if (!data.length) return console.log("⚠️ No analytics data found.");

    const headers = Object.keys(data[0]).filter(k => k !== '_id' && k !== '__v');
    const rows = data.map(obj =>
      headers.map(k => `"${String(obj[k] || '').replace(/"/g, '""')}"`).join(',')
    );

    const csvContent = [headers.join(','), ...rows].join('\n');
    fs.writeFileSync('analytics.csv', csvContent);
    console.log('✅ analytics.csv exported successfully');

    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Export error:", err.message);
  }
}

exportToCSV();
