const AuthModel = require('../models/auth.model');
const am = new AuthModel();

class AuthController {
    loginUser(credentials) {
        return am.loginWithUsernameAndPassword(credentials);
    }
}

module.exports = AuthController;