exports.ensureAuthMiddleware = async (req, res, next) => {
  const token = req.headers.Authorization;
  if (!token) {
    next(Error('No token provided'));
  }
  const user = await jwt.verify(token, "secret");
  req.user = user;
  next();
};
