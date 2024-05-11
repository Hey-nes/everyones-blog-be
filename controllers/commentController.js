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
  try {
    const commentId = req.params.id;
    const response = await axios.delete(
      `https://everyones-blog-be.vercel.app/api/comments/${commentId}`,
      {
        withCredentials: true,
      }
    );
    console.log("Comment deleted successfully");
    fetchPostComments();
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting comment", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
