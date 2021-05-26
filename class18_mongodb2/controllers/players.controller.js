const PlayersService = require('../services/players.service');

module.exports = class PlayersController {
    static async getAllPlayers(req, res, next) {
        res.status(200).json({message: 'all good'})
    }

    static async getPlayerById(req, res, next) {

    }

    static async createPlayer(req, res, next) {
        try {
            const createdPlayer = await PlayersService.createPlayer(req.body)
            res.status(201).json(createdPlayer)
        } catch (error) {
            next(error)
        }
    }
}

