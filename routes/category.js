const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

router.get("/", async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json({
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    res.status(200).json({
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const category = new Category(req.body);
    const newcategory = await category.save();

    res.status(200).json({
      data: newcategory,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(400).json({ message: "Category does not exist" });
    }
    category.categoryname = req.body.categoryname || category.categoryname;
    category.number = req.body.number || category.number;
    category.categorytype = req.body.categorytype || category.categorytype;
  
    const updatedCategory = await category.save();

    res.status(200).json({
      data: updatedCategory,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Category.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Category is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
