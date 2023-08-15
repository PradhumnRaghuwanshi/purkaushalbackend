const express = require("express");
const router = express.Router();
const UserDetail = require("../models/UserDetail");

router.get("/", async (req, res) => {
  try {
    const userDetail = await UserDetail.find();
    res.status(200).json({
      data: userDetail,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userDetail = await UserDetail.findById(req.params.id);

    res.status(200).json({
      data: userDetail,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const userDetail = new UserDetail(req.body);
    const newuserDetail = await userDetail.save();

    res.status(200).json({
      data: newuserDetail,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const userDetail = await UserDetail.findById(req.params.id);

    if (!userDetail) {
      return res.status(400).json({ message: "UserDetail does not exist" });
    }
    userDetail.name = req.body.name || userDetail.name;
    userDetail.email = req.body.email || userDetail.email;
    userDetail.number = req.body.number || userDetail.number;
    userDetail.pincode = req.body.pincode || userDetail.pincode;
    userDetail.houseNumber = req.body.mainImage || userDetail.mainImage;
    userDetail.street = req.body.goldWeight || userDetail.goldWeight;
    userDetail.town = req.body.town || userDetail.town;
    userDetail.landmark = req.body.landmark || userDetail.landmark;
    userDetail.state = req.body.state || userDetail.state;
    userDetail.billingAddress = req.body.billingAddress || userDetail.billingAddress;
    userDetail.shippingAddress = req.body.shippingAddress || userDetail.shippingAddress;
  
    const updatedUserDetail = await userDetail.save();

    res.status(200).json({
      data: updatedUserDetail,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await UserDetail.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "UserDetail is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
