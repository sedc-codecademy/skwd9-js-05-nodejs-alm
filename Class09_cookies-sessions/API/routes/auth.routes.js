const router = require('express').Router();
const AuthController = require('../controllers/auth.controller');
const ac = new AuthController();
const  { v4: uuidv4 } = require('uuid');

// [Cookies]
// router.post("/login", (req, res) => {
//   const credentials = req.body;
//   const session_id = uuidv4();
//   process.env.session_id = session_id;
//   if (credentials && credentials.username && credentials.password) {
//     ac.loginUser(credentials)
//       .then((response) => {
//         res.cookie('session_id', session_id);
//         res.status(200).json(response);
//       })
//       .catch((error) => {
//         res.status(401).json(error);
//       });
//   }
// });

router.post("/login", (req, res) => {
  console.log('==before auth==');
  console.log(req.sessionID);
  console.log(req.session);
  const credentials = req.body;
  if (credentials && credentials.username && credentials.password) {
    ac.loginUser(credentials)
      .then((response) => {
        // Successful login
        req.session.authenticated = true;
        console.log('==after auth==');
        console.log(req.sessionID);
        console.log(req.session);
        res.status(200).json(response);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
  }
});

module.exports = router;