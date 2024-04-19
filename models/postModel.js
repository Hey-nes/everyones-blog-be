const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  postHeader: { type: String, required: true },
  postContent: { type: String, required: true },
});

const postModel = mongoose.model("Posts", postSchema);

module.exports = postModel;
