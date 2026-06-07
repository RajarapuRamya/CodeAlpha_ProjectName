const express = require("express");

const Product =
require("../models/Product");

const router = express.Router();

/* Get All Products */

router.get("/", async (req, res) => {

    const products =
    await Product.find();

    res.json(products);
});

/* Get Single Product */

router.get("/:id", async (req, res) => {

    const product =
    await Product.findById(
        req.params.id
    );

    res.json(product);
});

/* Add Product */

router.post("/", async (req, res) => {

    const product =
    await Product.create(req.body);

    res.json(product);
});

module.exports = router;