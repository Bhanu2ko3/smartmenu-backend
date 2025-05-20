const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  tableNumber: Number,
  items: [{ foodId: String, quantity: Number }],
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
