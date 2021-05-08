const jwt = require("jsonwebtoken");
const Role = require("../helpers/role");

module.exports = function adminGuard(req, res, next) {
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
          .send({ message: "You are not allowed to add an animal!" });
      }

      if (user.role === Role.Admin) {
        next();
      } else {
        return res
          .status(403)
          .send({ message: "You are not allowed to add an animal!" });
      }
    }
  );
};
