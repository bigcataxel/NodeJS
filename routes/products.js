const express = require("express");
const { Product } = require("../models");
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll(); 
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" }); 
    }
    res.json(products); 
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ error: "Failed to retrieve products" });
  }
});

router.post("/", async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access forbidden: Admins only" });
  }

  const { name, price, description } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  try {
    const product = await Product.create({ name, price, description });
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Failed to create product" });
  }
});


router.delete("/:id", async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access forbidden: Admins only" });
  }

  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await product.destroy();
    res.json({ message: `Product with ID ${id} deleted successfully` });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

module.exports = router;
