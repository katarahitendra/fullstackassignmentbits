const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  goalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Goal',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  metrics: {
    // Define progress metrics fields here (e.g., weight, distance, time)
    // Example:
    weight: Number,
    distance: Number,
    time: Number
  }
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;