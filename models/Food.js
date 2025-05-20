const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  rating: Number,
  origin: String,
  preparationTime: Number,
  availability: Boolean,
  dietary: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fats: Number,
  flavor: String,
  spiceLevel: Number,
  ingredients: [String],
  servingSize: String,
  tags: [String],
  imageUrl: String,
  model3DUrl: String,
});

module.exports = mongoose.model('Food', FoodSchema);
