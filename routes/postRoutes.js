const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const postController = require("../controllers/postController");

router.post("/api/posts", postController.createPost);
router.get("/api/posts", postController.getAllPosts);
router.get("/api/posts/:id", postController.getPostById);
router.put("/api/posts/:id", postController.updatePost);
router.delete(
  "/api/posts/:id",
  authMiddleware,
  adminMiddleware,
  postController.deletePost
);

module.exports = router;
