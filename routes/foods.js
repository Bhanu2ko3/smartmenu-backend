const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

// POST create a new food item
router.post("/", async (req, res) => {
  try {
    const newFood = new Food(req.body);
    await newFood.save();
    res.status(201).json({
      message: "Created Food",
      food: newFood,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all foods
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET by ID
router.get("/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ msg: "Food not found" });
    res.json(food);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// // PUT update a food item
router.put("/:id", async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!food) return res.status(404).json({ msg: "Food not found" });

    res.json({
      message: "Updated Food",
      food: food,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// // DELETE a food item
router.delete("/:id", async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) return res.status(404).json({ msg: "Food not found" });
    res.json({ msg: "Food deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// // GET random food
// router.get("/random", async (req, res) => {
//   try {
//     const count = await Food.countDocuments();
//     const random = Math.floor(Math.random() * count);
//     const food = await Food.findOne().skip(random);
//     if (!food) return res.status(404).json({ msg: "Food not found" });
//     res.json(food);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by tag
// router.get("/tag/:tag", async (req, res) => {
//   try {
//     const foods = await Food.find({ tags: req.params.tag });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by category
// router.get("/category/:category", async (req, res) => {
//   try {
//     const foods = await Food.find({ category: req.params.category });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by name
// router.get("/name/:name", async (req, res) => {
//   try {
//     const foods = await Food.find({
//       name: { $regex: req.params.name, $options: "i" },
//     });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by origin
// router.get("/origin/:origin", async (req, res) => {
//   try {
//     const foods = await Food.find({ origin: req.params.origin });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by rating
// router.get("/rating/:rating", async (req, res) => {
//   try {
//     const foods = await Food.find({ rating: { $gte: req.params.rating } });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by price range
// router.get("/price/:min/:max", async (req, res) => {
//   try {
//     const foods = await Food.find({
//       price: { $gte: req.params.min, $lte: req.params.max },
//     });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by dietary preference
// router.get("/dietary/:dietary", async (req, res) => {
//   try {
//     const foods = await Food.find({ dietary: req.params.dietary });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by preparation time
// router.get("/preparation/:time", async (req, res) => {
//   try {
//     const foods = await Food.find({
//       preparationTime: { $lte: req.params.time },
//     });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by availability
// router.get("/availability/:available", async (req, res) => {
//   try {
//     const foods = await Food.find({
//       availability: req.params.available === "true",
//     });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by spice level
// router.get("/spice/:level", async (req, res) => {
//   try {
//     const foods = await Food.find({ spiceLevel: { $gte: req.params.level } });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by flavor
// router.get("/flavor/:flavor", async (req, res) => {
//   try {
//     const foods = await Food.find({ flavor: req.params.flavor });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by ingredient
// router.get("/ingredient/:ingredient", async (req, res) => {
//   try {
//     const foods = await Food.find({ ingredients: req.params.ingredient });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by serving size
// router.get("/serving/:size", async (req, res) => {
//   try {
//     const foods = await Food.find({ servingSize: req.params.size });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by calorie count
// router.get("/calories/:min/:max", async (req, res) => {
//   try {
//     const foods = await Food.find({
//       calories: { $gte: req.params.min, $lte: req.params.max },
//     });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by protein content
// router.get("/protein/:min/:max", async (req, res) => {
//   try {
//     const foods = await Food.find({
//       protein: { $gte: req.params.min, $lte: req.params.max },
//     });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by carb content
// router.get("/carbs/:min/:max", async (req, res) => {
//   try {
//     const foods = await Food.find({
//       carbs: { $gte: req.params.min, $lte: req.params.max },
//     });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by fat content
// router.get("/fats/:min/:max", async (req, res) => {
//   try {
//     const foods = await Food.find({
//       fats: { $gte: req.params.min, $lte: req.params.max },
//     });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by multiple filters
// router.get("/filter", async (req, res) => {
//   try {
//     const filters = req.query;
//     const query = {};
//     for (const key in filters) {
//       if (filters[key]) {
//         query[key] = filters[key];
//       }
//     }
//     const foods = await Food.find(query);
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by multiple tags
// router.get("/tags", async (req, res) => {
//   try {
//     const tags = req.query.tags.split(",");
//     const foods = await Food.find({ tags: { $in: tags } });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // GET foods by multiple categories
// router.get("/categories", async (req, res) => {
//   try {
//     const categories = req.query.categories.split(",");
//     const foods = await Food.find({ category: { $in: categories } });
//     if (!foods.length) return res.status(404).json({ msg: "No foods found" });
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET all or filtered
// router.get("/", async (req, res) => {
//   try {
//     const filter = req.query.filter;
//     const query = filter ? { tags: { $in: [filter] } } : {};
//     const foods = await Food.find(query);
//     res.json(foods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

module.exports = router;
