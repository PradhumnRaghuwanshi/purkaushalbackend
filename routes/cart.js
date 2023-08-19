const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json({
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    res.status(200).json({
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const cart = new Cart(req.body);
    const newcart = await cart.save();

    res.status(200).json({
      data: newcart,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    if (!cart) {
      return res.status(400).json({ message: "Cart does not exist" });
    }
    cart.category = req.body.category || cart.category;
    cart.productName = req.body.productName || cart.productName;
    cart.price = req.body.price || cart.price;
    cart.discount = req.body.discount || cart.discount;
    cart.mainImage = req.body.mainImage || cart.mainImage;
    cart.goldWeight = req.body.goldWeight || cart.goldWeight;
    cart.goldType = req.body.goldType || cart.goldType;
    cart.gold = req.body.gold || cart.gold;
    cart.solitairy = req.body.solitairy || cart.solitairy;
    cart.diamond = req.body.diamond || cart.diamond;
    cart.size = req.body.size || cart.size;
    cart.description = req.body.description || cart.description;
    cart.review = req.body.review || cart.review;
  
    const updatedCart = await cart.save();

    res.status(200).json({
      data: updatedCart,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Cart is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
