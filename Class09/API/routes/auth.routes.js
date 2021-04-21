const router = require('express').Router();
const AuthController = require('../controllers/auth.controller');
const ac = new AuthController();
const  { v4: uuidv4 } = require('uuid');

router.post("/login", (req, res) => {
  const credentials = req.body;
  const session_id = uuidv4();
  process.env.session_id = session_id;
  if (credentials && credentials.username && credentials.password) {
    ac.loginUser(credentials)
      .then((response) => {
        res.cookie('session_id', session_id);
        res.status(200).json(response);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
  }
});

module.exports = router;