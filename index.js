require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/config");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongodb_uri);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas", error);
    throw error;
  }
};

const startServer = async () => {
  try {
    await connectToDatabase();
    app.use("/", postRoutes);
    app.use("/", commentRoutes);
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}.`);
    });
  } catch (error) {
    console.error("Error starting server", error);
  }
};

startServer();
