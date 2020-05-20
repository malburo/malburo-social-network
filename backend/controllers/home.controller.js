const User = require("../../models/user.model");

module.exports.postLogin = async (req, res) => {
  let user = await User.find();
  res.json(user);
};
