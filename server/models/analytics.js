const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  originalFile: {
    type: String,
    required: true
  },
  chartImage: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true,
    enum: [
      'Computer Science and Engineering',
      'Information Technology',
      'Electronics and Communications Engineering',
      'Electricals and Electronics Engineering',
      'Bio-Medical Engineering'
    ]
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Research Publications',
      'Academics',
      'Athletics/Sports',
      'Technical Events',
      'Non-Technical Events'
    ]
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Analytics', analyticsSchema);