const Post = require("../models/post.model");

let cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.getPost = async (req, res) => {
  console.log(req.user);
  // let post = await Post.find();
  // res.json(user);
};

exports.post = async (req, res) => {
  console.log(process.env.CLOUD_NAME);
  // console.log(req.body.name, "asdsadasd", req.file);
  cloudinary.uploader.upload(req.file.path, (error, result) => {
    // req.body.postImg = result.url;
    console.log(result.url);
    // let post = await Post.find();
    // res.json(user);
  });
};
