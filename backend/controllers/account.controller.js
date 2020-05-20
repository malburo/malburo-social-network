const User = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports.postLogin = async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Email hoặc username không đúng" });
    }
    if (user.password !== req.body.password) {
      return res.status(400).json({ message: "password không đúng" });
    }
    res.json(user);
  } catch (e) {
    res.status(400).json(`Error: ${e}`);
  }
};

module.exports.postRegister = async (req, res) => {
  try {
    const saltRounds = 10;
    const { fullname, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      fullname,
      username,
      email,
      password: hashedPassword,
    });
    newUser.save().then(() => res.json("User added"));
  } catch (e) {
    res.status(400).json(`Error: ${e}`);
  }
};
