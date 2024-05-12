// goalRoutes.js

const express = require('express');
const router = express.Router();
const Goal = require('../Models/Goal');

// Route for creating a new goal
router.post('/set', async (req, res) => {
  try {
    const { userId, type, targetValue } = req.body;
    
    const newGoal = new Goal({
        userId: req.user,
        type, 
        targetValue
     });
    await newGoal.save();
    res.status(201).json({ message: 'Goal created successfully', goal: newGoal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for retrieving all goals for a user
router.get('/getgoal', async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.user });
    res.status(200).json({ goals });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for updating a goal
router.put('/updategoal', async (req, res) => {
    try {
      const { type, targetValue } = req.body;
      const userId = req.user; // Assuming userId is stored in req.user
  
      // Find the goal associated with the user ID
      const goal = await Goal.findOne({ userId });
      console.log(goal)
      if (!goal) {
        return res.status(404).json({ message: 'Goal not found for the user' });
      }
  
      // Update the found goal
      const updatedGoal = await Goal.findByIdAndUpdate(goal._id, { type, targetValue }, { new: true });
  
      res.status(200).json({ message: 'Goal updated successfully', goal: updatedGoal });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// Route for deleting a goal
router.delete('/removegoal', async (req, res) => {
  try {
    const userId = req.user; // Assuming userId is stored in req.user
  
      // Find the goal associated with the user ID
    const goal = await Goal.findOne({ userId });
    console.log(goal)
    await Goal.findByIdAndDelete(goal._id);
    res.status(200).json({ message: 'Goal deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
