const Player = require('../models/player.model');
const { BadRequest } = require('../const/error.const')

module.exports = class PlayersService {
    static async getAllPlayers() {

    }

    static async getPlayerById(id) {

    }

    static async createPlayer(data) {
        try {
            const player = {
                name: data.name,
                country: data.country,
                position: data.position,
                age: data.age
            }

            const response = await new Player(player).save()
            return response;
        } catch (error) {
            throw new BadRequest(`Error occurred while saving the player.`)
        }
    }
}