const validateCookie = (req, res, next) => {
  if (
    process.env.session_id &&
    req.cookies.session_id === process.env.session_id
  ) {
    next();
  } else {
    res.status(400).json({
      message: "Error! You are not authorized!",
    });
  }
};

module.exports = validateCookie;