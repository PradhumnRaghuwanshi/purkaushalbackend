const mongoose = require("mongoose")

const AllProduct = mongoose.Schema({
  category:String,
  productName :String,
  price:Number,
  discount:Number,
  mainImage:String,
  image:Array,
  goldWeight:Array,
  goldType:Array,
  gold:Array, 
  solitairy:Array,
  diamond:Array,
  size:Array,
  description:String,
  review:Array
})

module.exports = mongoose.model("AllProduct", AllProduct);