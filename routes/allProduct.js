const express = require("express");
const router = express.Router();
const AllProduct = require("../models/AllProduct");

router.get("/", async (req, res) => {
  try {
    const allProduct = await AllProduct.find();
    res.status(200).json({
      data: allProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const allProduct = await AllProduct.findById(req.params.id);

    res.status(200).json({
      data: allProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const allProduct = new AllProduct(req.body);
    const newallProduct = await allProduct.save();

    res.status(200).json({
      data: newallProduct,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const allProduct = await AllProduct.findById(req.params.id);

    if (!allProduct) {
      return res.status(400).json({ message: "AllProduct does not exist" });
    }
    allProduct.category = req.body.category || allProduct.category;
    allProduct.productName = req.body.productName || allProduct.productName;
    allProduct.price = req.body.price || allProduct.price;
    allProduct.discount = req.body.discount || allProduct.discount;
    allProduct.mainImage = req.body.mainImage || allProduct.mainImage;
    allProduct.goldWeight = req.body.goldWeight || allProduct.goldWeight;
    allProduct.goldType = req.body.goldType || allProduct.goldType;
    allProduct.gold = req.body.gold || allProduct.gold;
    allProduct.solitairy = req.body.solitairy || allProduct.solitairy;
    allProduct.diamond = req.body.diamond || allProduct.diamond;
    allProduct.size = req.body.size || allProduct.size;
    allProduct.description = req.body.description || allProduct.description;
    allProduct.review = req.body.review || allProduct.review;
  
    const updatedAllProduct = await allProduct.save();

    res.status(200).json({
      data: updatedAllProduct,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await AllProduct.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "AllProduct is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
