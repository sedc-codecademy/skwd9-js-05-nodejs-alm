const router = require('express').Router();
const AuthController = require('./auth.controller')

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)

module.exports = router;