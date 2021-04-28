const UserModel = require('../models/user.model');
const um = new UserModel();

class UserController {
    getUsers() {
        return um.getUsers();
    }
}

module.exports = UserController;