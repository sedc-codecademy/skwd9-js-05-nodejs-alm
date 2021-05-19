const TeamsService = require('../services/teams.service');

module.exports = class TeamsController {

    static async getAllTeams(req, res, next) {
        const teams = await TeamsService.getAllTeams();
        return teams;
    }
}