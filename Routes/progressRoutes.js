const express = require('express');
const router = express.Router();
const Progress = require('../Models/Progress');
const Goal = require('../Models/Goal');

// Route for logging progress
router.post('/log', async (req, res) => {
  try {
    const  userId = req.user; // Assuming userId is stored in req.user
    const { goalId, metrics } = req.body;

    // Ensure the goal exists and belongs to the user
    const goal = await Goal.findOne({ userId });
    if (!goal) {
      return res.status(404).json({ message: 'Goal not found for the user' });
    }

    const newProgress = new Progress({ userId, goalId : goal._id, metrics });
    await newProgress.save();
    res.status(201).json({ message: 'Progress logged successfully', progress: newProgress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for retrieving progress data for a goal
router.get('/track', async (req, res) => {
  try {
    const  userId = req.user; // Assuming userId is stored in req.user
    // Ensure the goal exists and belongs to the user
    const goal = await Goal.findOne({ userId });
    if (!goal) {
      return res.status(404).json({ message: 'Goal not found for the user' });
    }

    // const newProgress = new Progress({ userId, goalId : goal._id, metrics });
    const goalId = goal._id 
    const progressData = await Progress.find({ goalId });
    res.status(200).json({ progressData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
