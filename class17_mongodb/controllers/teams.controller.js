const TeamsService = require('../services/teams.service');

module.exports = class TeamsController {

    static async getAllTeams(req, res, next) {
        console.log('Controller', req)
        try {
            const teams = await TeamsService.getAllTeams();
            res.status(200).json(teams)
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    static async getTeamById(req, res, next) {
        try {
            const id = req.params.id;
            const team = await TeamsService.getTeamById(id)
            res.status(200).json(team);
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    static async createTeam(req, res, next) {
        try {
            const createdTeam = await TeamsService.createTeam(req.body);
            res.status(201).json(createdTeam);
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}