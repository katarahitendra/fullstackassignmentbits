// workoutPlanRoutes.js

const express = require('express');
const router = express.Router();
const WorkoutPlan = require('../Models/WorkoutPlan');

// Route for retrieving all workout plans
router.get('/', async (req, res) => {
  try {
    const workoutPlans = await WorkoutPlan.find();
    res.status(200).json({ workoutPlans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for creating a new workout plan
router.post('/', async (req, res) => {
  try {
    const { name, description, exercises, createdBy } = req.body;
    const newWorkoutPlan = new WorkoutPlan({ name, description, exercises, createdBy });
    await newWorkoutPlan.save();
    res.status(201).json({ message: 'Workout plan created successfully', workoutPlan: newWorkoutPlan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for retrieving a specific workout plan by ID
router.get('/:workoutPlanId', async (req, res) => {
  try {
    const workoutPlan = await WorkoutPlan.findById(req.params.workoutPlanId);
    if (!workoutPlan) {
      return res.status(404).json({ message: 'Workout plan not found' });
    }
    res.status(200).json({ workoutPlan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
