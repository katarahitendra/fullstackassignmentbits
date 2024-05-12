const express = require('express');
const router = express.Router();
const SmartwatchData = require('../Models/SmartwatchData');

// Route for receiving data from smartwatches
router.post('/stream', async (req, res) => {
  try {
    // Parse incoming data from smartwatch
    const { userId, data } = req.body;

    // Validate data (optional)

    // Save data to the database
    const newSmartwatchData = new SmartwatchData({ userId: req.user, data });
    await newSmartwatchData.save();

    res.status(200).json({ message: 'Data streamed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.get('/getstream/', async (req, res) => {
  try {
    const userId = req.user;

    // Fetch smartwatch data for the specified user from the database
    const smartwatchData = await SmartwatchData.find({ userId });

    if (!smartwatchData || smartwatchData.length === 0) {
      return res.status(404).json({ message: 'No smartwatch data found for the user' });
    }

    res.status(200).json({ smartwatchData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;
