const commentService = require("../services/commentService");

exports.createComment = async (req, res) => {
  try {
    const newComment = await commentService.createComment(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const { postId } = req.query;
    const comments = await commentService.getAllComments(postId);
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getCommentById = async (req, res) => {
  try {
    const comment = await commentService.getCommentById(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const updatedComment = await commentService.updateComment(
      req.params.id,
      req.body
    );
    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteComment = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Unauthorized access" });
  }
  try {
    await commentService.deleteComment(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
