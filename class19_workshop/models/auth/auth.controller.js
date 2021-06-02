const AuthService = require('./auth.service')

class AuthController {
    static async login(req, res, next) {
        try {
            const user = await AuthService.login(req.body);
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async register(req, res, next) {
        try {
            const user = await AuthService.register(req.body);
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = AuthController;