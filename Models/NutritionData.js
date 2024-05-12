const mongoose = require('mongoose');

const nutritionDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  mealType: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'snack'],
    required: true
  },
  foodItems: [String], // Array of food items
  calorieCount: Number,
  protein: Number,
  carbohydrates: Number,
  fats: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

const NutritionData = mongoose.model('NutritionData', nutritionDataSchema);

module.exports = NutritionData;
