const mongoose = require("mongoose")
const itemSchema = mongoose.Schema({item_name: String,category: String,quantity: Number})
module.exports = mongoose.model("item", itemSchema)