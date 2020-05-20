module.exports = async (req, res, next) => {
  try {
    let errors = {};
    if (!req.body.username && !req.body.email) {
      errors.name = "Vui lòng cung cấp email hoặc username.";
    }
    if (!req.body.password) {
      errors.password = "Vui lòng cung cấp mật khẩu.";
    }
    if (Object.keys(errors).length !== 0) {
      return res.json({ errors });
    }
    next();
  } catch (e) {
    res.json(`Error ${e}`);
  }
};
