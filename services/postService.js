const postModel = require("../models/postModel");

exports.createPost = async (postData) => {
  try {
    return await postModel.create(postData);
  } catch (error) {
    throw error;
  }
};

exports.getAllPosts = async () => {
  try {
    return await postModel.find();
  } catch (error) {
    throw error;
  }
};

exports.getPostById = async (postId) => {
  try {
    return await postModel.findById(postId);
  } catch (error) {
    throw error;
  }
};

exports.updatePost = async (postId, updatedPostData) => {
  try {
    return await postModel.findByIdAndUpdate(postId, updatedPostData, {
      new: true,
    });
  } catch (error) {
    throw error;
  }
};

exports.deletePost = async (postId) => {
  try {
    await postModel.findByIdAndDelete(postId);
  } catch (error) {
    throw error;
  }
};
