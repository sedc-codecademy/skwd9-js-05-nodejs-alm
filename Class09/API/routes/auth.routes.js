const router = require('express').Router();
const AuthController = require('../controllers/auth.controller');
const ac = new AuthController();

router.post("/login", (req, res) => {
  const credentials = req.body;
  if (credentials && credentials.username && credentials.password) {
    ac.loginUser(credentials)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
  }
});

module.exports = router;