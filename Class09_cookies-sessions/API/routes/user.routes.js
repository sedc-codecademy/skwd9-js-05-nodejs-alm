const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const cookieValidator = require('../cookieValidator.const');
const sessionValidator = require('../sessionValidator.const');
const uc = new UserController();

router.get("/:id?", sessionValidator, (req, res) => {
  if (req.params && req.params.id) {
    // do stuff
  } else {
    uc.getUsers().then((response) => {
      res.status(200).json(response);
    });
  }
});

module.exports = router;