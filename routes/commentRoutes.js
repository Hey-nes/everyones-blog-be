const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/api/comments", commentController.createComment);
router.get("/api/comments", commentController.getAllComments);
router.get("/api/comments/:id", commentController.getCommentById);
router.put("/api/comments/:id", commentController.updateComment);
router.delete("/api/comments/:id", commentController.deleteComment);

module.exports = router;
