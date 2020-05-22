const User = require("../models/user.model");

module.exports = async (req, res, next) => {
  try {
    const [checkEmail, checkUsername] = await Promise.all([
      User.find({ email: req.body.email }),
      User.find({ username: req.body.username }),
    ]);
    let errors = {};
    if (!req.body.fullname) {
      errors.fullname = "Vui lòng cung cấp họ và tên";
    }
    if (req.body.fullname.length > 30) {
      errors.nameLength = "Tên của bạn quá dài";
    }
    if (checkEmail.length) {
      errors.emailIsExists = "Email này đã được sử dụng";
    }
    if (checkUsername.length) {
      errors.usernameIsExists = "username này đã được sử dụng";
    }
    if (!req.body.email) {
      errors.email = "Vui lòng cung cấp email.";
    }
    if (!req.body.password) {
      errors.password = "Vui lòng cung cấp password.";
    }
    if (Object.keys(errors).length !== 0) {
      return res.json({ errors });
    }
    next();
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
