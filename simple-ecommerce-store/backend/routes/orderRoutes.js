const express = require("express");

const Order =
require("../models/Order");

const router = express.Router();

/* Create Order */

router.post("/", async (req, res) => {

    const order =
    await Order.create({
        userId: req.body.userId,
        products: req.body.products,
        totalPrice: req.body.totalPrice
    });

    res.json(order);
});

/* Get Orders */

router.get("/", async (req, res) => {

    const orders =
    await Order.find();

    res.json(orders);
});

module.exports = router;