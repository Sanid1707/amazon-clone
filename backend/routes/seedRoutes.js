import express from "express";
import Product from "../models/productModel.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  
  // await Product.
  //Model.remove was depreceated change to deleteMany
  await Product.deleteMany({});;
  const createdProducts = await Product.insertMany(data.products);
  
  //not using ey 
  // await User.remove({});
  // const createdUsers = await User.insertMany(data.users);

  res.send({ createdProducts });
});

export default seedRouter;
