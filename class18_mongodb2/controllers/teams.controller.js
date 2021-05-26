const TeamsService = require('../services/teams.service');

module.exports = class TeamsController {

    static async getAllTeams(req, res, next) {
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

    // PUT - replace old team with new one
    static async updateFullTeam(req, res, next) {
        try {
            const updatedTeam = await TeamsService.updateFullTeam(req.body, req.params.id)
            res.status(204).json({updatedTeam});
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    // PATCH - updating the old team with a new one
    static async updateTeam(req, res, next) {
        try {
            const updatedTeam = await TeamsService.updateTeam(req.body, req.params.id)
            res.status(204).json({updatedTeam});
        } catch (error) {
            res.status(500).json({ error })
        }
    }

}