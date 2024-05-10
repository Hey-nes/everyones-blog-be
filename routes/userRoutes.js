const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route for user login
router.post("/api/users/login", userController.loginUser);

// Route for user registration
router.post("/api/users/register", userController.registerUser);

module.exports = router;
