const express = require("express");
const router = express.Router();
const Order = require("../models/Order");


// POST place an order
router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save(); 
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




// // GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// GET order by ID
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ msg: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update order status
router.put("/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) return res.status(404).json({ msg: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE order
router.delete("/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ msg: "Order not found" });
    res.json({ msg: "Order deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




module.exports = router;