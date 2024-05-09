const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

exports.registerUser = async (req, res) => {
  try {
    const { name, password, isAdmin } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      password: hashedPassword,
      isAdmin: isAdmin || false,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
