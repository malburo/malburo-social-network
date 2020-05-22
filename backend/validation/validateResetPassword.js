module.exports = async (req, res, next) => {
  try {
    let errors = {};
    if (!req.body.email) {
      errors.name = "Vui lòng cung cấp email";
    }
    if (Object.keys(errors).length !== 0) {
      return res.json({ errors });
    }
    next();
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
