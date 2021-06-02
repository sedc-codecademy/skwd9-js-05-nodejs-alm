const AuthService = require("./auth.service");
const { v4: uuidv4 } = require('uuid')

class AuthController {
  static async login(req, res, next) {
    try {
      const user = await AuthService.login(req.body);

      const session_id = uuidv4();
      process.env.session_id = session_id;
    
      res.cookie('user_type', user.type)
      res.cookie('session_id', session_id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async register(req, res, next) {
    try {
      const user = await AuthService.register(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async logout(req, res, next) {
      try {
        process.env.session_id = null;
        res.status(200).json({ message: 'Logged out!' })
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
  }
}

module.exports = AuthController;
