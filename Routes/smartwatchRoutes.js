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
    const newSmartwatchData = new SmartwatchData({ userId, data });
    await newSmartwatchData.save();

    res.status(200).json({ message: 'Data streamed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
