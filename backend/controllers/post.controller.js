const Post = require("../models/post.model");

let cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.getPost = async (req, res, next) => {
  try {
    let posts = await Post.find()
      .populate("userId")
      .populate({ path: "comments", populate: { path: "userId" } })
      .sort({ _id: -1 })
      .exec();
    return res.status(200).json({ posts });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};

exports.post = async (req, res, next) => {
  const user = req.user;
  try {
    let image = null;
    if (req.file) {
      await cloudinary.uploader.upload(req.file.path, async (error, result) => {
        image = result.url;
      });
      let newPost = await Post.create({
        userId: user._id,
        body: req.body.caption,
        image,
      });
    } else {
      console.log("upload fail"); 
    }
  } catch (err) {
    console.log(err);
  }
};
