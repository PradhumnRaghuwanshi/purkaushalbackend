const mongoose = require("mongoose")

const UserDetail = mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    pincode: Number,
    houseNumber: String,
    street: String,
    town: String,
    landmark: String,
    state: String,
    billingAddress: Array,
    shippingAddress: Array
})

module.exports = mongoose.model("UserDetail", UserDetail);