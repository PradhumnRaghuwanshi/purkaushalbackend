const mongoose = require("mongoose")

const Cart = mongoose.Schema({
  productDetail:Array,
  price:Number
})

module.exports = mongoose.model("Cart", Cart);