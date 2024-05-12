const mongoose = require('mongoose');

const smartwatchDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  data: {
    // Define the structure of the data received from smartwatches
    // Example fields:
    timestamp: {
      type: Date,
      default: Date.now
    },
    activityType: String,
    duration: Number, // Duration in seconds
    distance: Number, // Distance in meters
    heartRate: Number, // Heart rate in bpm
    caloriesBurned: Number // Calories burned
    // Add more fields as needed
  }
});

const SmartwatchData = mongoose.model('SmartwatchData', smartwatchDataSchema);

module.exports = SmartwatchData;
