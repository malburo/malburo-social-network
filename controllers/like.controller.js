const Post = require("../models/post.model");
exports.like = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { postId, isLike } = req.body;
    let post = await Post.findById(postId);
    if (!isLike) {
      if (post.likes.indexOf(userId) === -1) {
        post.likes.push(userId);
      }
      await post.save();
      return res.status(200).json({ userId: userId, isLike: true });
    }
    const removeLike = post.likes.filter((item) => {
      return item != userId;
    });
    post.likes = removeLike;
    post.save();
    return res.status(200).json({ userId: userId, isLike: false });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
