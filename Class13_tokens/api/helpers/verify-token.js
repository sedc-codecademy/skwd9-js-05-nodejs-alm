const jwt = require("jsonwebtoken");

module.exports = function authenticate(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).send({ message: "Access denied!" });
  }

  const tokenWithoutBearer = token.split(" ")[1];
  jwt.verify(
    tokenWithoutBearer,
    process.env.ACCESS_TOKEN_SECRET,
    (err, user) => {
      if (err) {
        return res
          .status(403)
          .send({ message: "You are not allowed to get this data!" });
      }
      res.user = user;
      next();
    }
  );
};
