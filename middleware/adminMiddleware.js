const adminMiddleware = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: "Unauthorized access" });
  }
  next();
};

module.exports = adminMiddleware;
