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

exports.loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await userModel.findOne({ name });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      config.jwtSecret,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
