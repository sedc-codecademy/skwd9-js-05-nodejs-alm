const router = require("express").Router();
const AuthController = require("../controllers/auth.controller");
const ac = new AuthController();

router.post("/register", (req, res) => {
  const creds = req.body;
  ac.registerUser(creds)
    .then((payload) => {
      // Payload is the newly created user object.
      req.session.user = payload;
      res.status(200).json(payload);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

router.post("/login", (req, res) => {
  const creds = req.body;
  ac.loginUser(creds)
    .then((data) => {
      req.session.user = data;
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

router.post("/logout", (req, res) => {
  ac.logoutUser()
    .then((data) => {
      req.session.user = undefined;
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

router.get('/current-user', (req, res) => {
    const currentUser = process.firebase.auth().currentUser;
    if (currentUser) {
        res.status(200).json(currentUser);
    } else {
        res.status(400).json({
            messsage: 'No user is currently logged in!',
        })
    }
})

module.exports = router;
