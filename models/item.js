// models/item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "Quantity must be at least 0"],
    max: [50, "Quantity muste not exceed 50"]
  },
  // You can add more fields as needed for your specific use case
});

module.exports = mongoose.model("Item", itemSchema);
