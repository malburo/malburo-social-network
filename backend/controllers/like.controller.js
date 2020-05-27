const Post = require("../models/post.model");
exports.like = async (req, res, next) => {
  try {
    let post = await Post.findById(postId);
    post.likes.push(req.user._id);
    await post.save();
    return res.json(post.likes);
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
