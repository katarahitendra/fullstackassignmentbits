
const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: String,
  sets: Number,
  reps: Number
});

const workoutPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  exercises: [exerciseSchema],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});

const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);

module.exports = WorkoutPlan;
