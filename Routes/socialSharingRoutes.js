const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route for sharing content on Facebook
router.post('/facebook', async (req, res) => {
  try {
    const { userId, content } = req.body;

    // Make request to Facebook Graph API to post content
    // Example:
    const response = await axios.post(`https://graph.facebook.com/${userId}/feed`, {
      message: content,
      access_token: 'YOUR_FACEBOOK_ACCESS_TOKEN' // Replace with your Facebook access token
    });

    res.status(200).json({ message: 'Content shared on Facebook successfully', postId: response.data.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for sharing content on Twitter
router.post('/twitter', async (req, res) => {
  try {
    const { userId, content } = req.body;

    // Make request to Twitter API to post content
    // Example:
    const response = await axios.post('https://api.twitter.com/1.1/statuses/update.json', {
      status: content,
      user_id: userId,
      access_token: 'YOUR_TWITTER_ACCESS_TOKEN' // Replace with your Twitter access token
    });

    res.status(200).json({ message: 'Content shared on Twitter successfully', tweetId: response.data.id_str });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
