
const express = require('express');
const router = express.Router();
const Activity = require('../Models/Activity'); // Assuming you have a model for activities
const { verifyAccessToken } = require('../helpers/jwt_helper')
// Route for logging a fitness activity
router.post('/log', async (req, res) => {
  try {
    // Extract activity details from the request body
    const { type, duration, distance, intensity, caloriesBurned } = req.body;

    // Create a new activity instance
    const newActivity = new Activity({
      type,
      duration,
      distance,
      intensity,
      caloriesBurned,
      userId: req.user
    });
      
     
    // Save the activity to the database
    await newActivity.save();
    console.log(newActivity.userId)
    res.status(200).json({ message: 'Activity logged successfully', activity: newActivity, user: req.user  });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Route for retrieving activity data
// Route for retrieving activity data for a specific user
router.get('/history', async (req, res) => {
    try {
      const userId = req.user;
  
      // Fetch activities for the specified user from the database
      const activities = await Activity.find({ userId });
  
      if (!activities || activities.length === 0) {
        return res.status(404).json({ message: 'No activities found for the user' });
      }
  
      res.status(200).json({ activities });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
module.exports = router;
