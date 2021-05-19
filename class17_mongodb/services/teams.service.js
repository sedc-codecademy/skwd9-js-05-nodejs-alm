const Team = require('../models/team.model')

module.exports = class TeamsService {
    static async getAllTeams() {
        return await Team.find();
    }
}