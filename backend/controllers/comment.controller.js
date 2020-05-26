const Comment = require("../models/comment.model");
const Post = require("../models/post.model");
exports.comment = async (req, res, next) => {
  try {
    const { body, postId } = req.body;
    let newComment = await Comment.create({
      userId: req.user._id,
      body,
      postId,
    });
    let post = await Post.findById(postId);
    post.comments.push(newComment._id);
    await post.save();
    newComment._doc.userId = req.user; 
    return res.json(newComment);
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
