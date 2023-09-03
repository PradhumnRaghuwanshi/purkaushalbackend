const mongoose = require("mongoose")

const CategorySchema = mongoose.Schema({
    category:String,
    subCategory:String,
    subSubCategory:String,
    subCategoryImage:String

    })

module.exports = mongoose.model("Category", CategorySchema);