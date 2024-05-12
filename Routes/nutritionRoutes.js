const express = require('express');
const router = express.Router();
const NutritionData = require('../Models/NutritionData');

// Route for logging nutrition data
router.post('/log', async (req, res) => {
  try {
    const { userId, mealType, foodItems, calorieCount, protein, carbohydrates, fats } = req.body;
    
    // Calculate total calorie count
    const totalCalories = calorieCount || (protein + carbohydrates + fats) * 4; // Assuming 1g protein/carbs = 4 calories, 1g fat = 9 calories
    
    const newNutritionData = new NutritionData({ userId : req.user, mealType, foodItems, calorieCount: totalCalories, protein, carbohydrates, fats });
    await newNutritionData.save();
    res.status(201).json({ message: 'Nutrition data logged successfully', nutritionData: newNutritionData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for retrieving nutrition data for a user
router.get('/getistnutrition', async (req, res) => {
  try {
    const nutritionData = await NutritionData.find({ userId: req.user });
    res.status(200).json({ nutritionData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;