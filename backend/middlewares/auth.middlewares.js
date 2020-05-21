exports.ensureAuthMiddleware = async (req, res, next) => {
  const token = req.headers.Authorization;
  if (!token) {
    return res.status(401);
  }
  const user = await jwt.verify(token, "secret");
  req.user = user;
  next();
};
