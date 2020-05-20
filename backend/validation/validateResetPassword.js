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
  } catch (e) {
    res.json(`Error ${e}`);
  }
};
