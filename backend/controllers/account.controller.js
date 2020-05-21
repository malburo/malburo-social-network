const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json({ message: "Username không tồn tại" });
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(400).json({ message: "password không đúng" });
    }

    const accessToken = jwt.sign(user._doc, "secret");

    res.json({ user, accessToken });
  } catch (e) {
    res.status(400).json(`Error: ${e}`);
  }
};

module.exports.register = async (req, res) => {
  try {
    const saltRounds = 10;
    const { fullname, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      fullname,
      username,
      email,
      password: hashedPassword,
    });
    delete newUser.password;
    const accessToken = jwt.sign(newUser._doc, "secret");
    return res.json({
      user: newUser,
      accessToken,
    });
  } catch (e) {
    res.status(400).json(`Error: ${e}`);
  }
};

module.exports.resetPassword = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Email không tồn tại" });
    }
    res.json({ message: "Đã gửi email" });
  } catch (e) {
    res.status(400).json(`Error: ${e}`);
  }
};
