const User = require("../../models/user.model");

exports.postLogin = async (req, res) => {
  let user = await User.find();
  res.json(user);
};
