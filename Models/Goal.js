
const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  type: {
    type: String,
    enum: ['weight loss', 'endurance improvement', 'muscle gain', 'specific performance'],
    required: true
  },
  targetValue: {
    type: Number,
    required: true
  },
  // Add more fields as needed for specific performance goals
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
