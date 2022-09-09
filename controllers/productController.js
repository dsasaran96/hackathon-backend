import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import e from "express";

export const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({}, null, { sort: { name: 1 } });

    res.json({ products });
  } catch (err) {
    console.log(err);
  }
});

export const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.remove();
      res.json({ message: "Product removed" });
    } else {
      res.status(404);
      throw new Error("Product not found!");
    }
  } catch (err) {
    console.log(err);
  }
});

export const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: req.body.name,
    oldPrice: req.body.oldPrice,
    newPrice: req.body.newPrice,
    timeFrame: req.body.timeFrame,
    label: req.body.label,
    category: req.body.category,
    image: req.body.image,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { name, oldPrice, newPrice, timeFrame, label, category, image } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    (product.oldPrice = oldPrice),
      (product.newPrice = newPrice),
      (product.timeFrame = timeFrame),
      (product.label = label),
      (product.category = category),
      (product.image = image);

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
