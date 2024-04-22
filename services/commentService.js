const commentModel = require("../models/commentModel");

exports.createComment = async (postId, commentData) => {
  try {
    const commentWithPostId = { ...commentData, postId };
    return await commentModel.create(commentWithPostId);
  } catch (error) {
    throw error;
  }
};



exports.getAllComments = async () => {
  try {
    return await commentModel.find();
  } catch (error) {
    throw error;
  }
};

exports.getCommentById = async (commentId) => {
  try {
    return await commentModel.findById(commentId);
  } catch (error) {
    throw error;
  }
};

exports.updateComment = async (commentId, updatedCommentData) => {
  try {
    return await commentModel.findByIdAndUpdate(commentId, updatedCommentData, {
      new: true,
    });
  } catch (error) {
    throw error;
  }
};

exports.deleteComment = async (commentId) => {
  try {
    await commentModel.findByIdAndDelete(commentId);
  } catch (error) {
    throw error;
  }
};
