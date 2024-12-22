const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models");


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    return res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    return res.status(500).json({ error: "An error occurred during login" });
  }
});


router.post("/register", async (req, res) => {
  try {
    const { email, password, fullName, role } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      fullName,
      role: role || "USER",
    });

    res.status(201).json({ id: newUser.id, email: newUser.email });
  } catch (error) {
    res.status(400).json({ error: "Error creating user" });
  }
});

module.exports = router;
