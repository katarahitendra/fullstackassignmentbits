const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  intensity: {
    type: String,
    required: true
  },
  caloriesBurned: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  timestamp: { 
    type: Date,
    default: Date.now }
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
