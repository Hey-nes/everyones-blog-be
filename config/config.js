module.exports = {
  port: process.env.PORT || 3000,
  mongodb_uri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
};
