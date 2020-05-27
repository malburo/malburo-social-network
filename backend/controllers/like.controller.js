const Like = require("../models/like.model");
const Post = require("../models/post.model");
exports.like = async (req, res, next) => {
  try {
    const { postId } = req.body;
    let newLike = await Like.create({
      userId: req.user._id,
      postId,
    });
    let post = await Post.findById(postId);
    post.likes.push(newLike._id);
    await post.save();
    newLike._doc.userId = req.user; 
    return res.json(newLike);
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
