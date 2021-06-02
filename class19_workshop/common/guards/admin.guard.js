const UserType = require("../../common/models/user-type.enum");

const adminGuard = (req, res, next) => {
  if (req.cookies.user_type === UserType.admin) {
    next();
  } else {
    res.status(405).json({
      message: "You are not allowed to access this method.",
    });
  }
};

module.exports = adminGuard;
