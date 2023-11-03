import express from "express";
import mongoose from "mongoose"; // Import Mongoose
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send({ message: "Server Error" });
  }
});

productRouter.get("/slug/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    res.status(500).send({ message: "Server Error" });
  }
});

productRouter.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).send({ message: "Server Error" });
  }
});

export default productRouter;
