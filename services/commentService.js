const commentModel = require("../models/commentModel");

exports.createComment = async (commentData) => {
  try {
    return await commentModel.create(commentData);
  } catch (error) {
    throw error;
  }
};

exports.getAllComments = async (postId) => {
  try {
    const comments = await commentModel.find({ postId });
    return comments;
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
