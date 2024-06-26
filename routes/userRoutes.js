const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route for user login
router.post("/api/users/login", userController.loginUser);

// Route for user registration
router.post("/api/users/register", userController.registerUser);

// Route to fetch all users
router.get("/api/users", userController.getUsers);

// Route to get user data
router.get("/api/users/data", userController.getUserData);

module.exports = router;
