const Team = require('../models/team.model')
const { GeneralError, NotFound, BadRequest } = require('../const/error.const')

module.exports = class TeamsService {
    static async getAllTeams() {
        try {
            const teams = await Team.find();
            if (!teams) {
                return [];
            }
            return teams;
        } catch (error) {
            throw new GeneralError(`Could not get all teams. ERROR: ${error}`)
        }
    }

    static async getTeamById(id) {
        try {
            const team = await Team.findById({ _id: id });
            return team;
        } catch (error) {
            throw new NotFound(`Team with ID: ${id} was not found.`)
        }
    }

    static async createTeam(data) {
        try {
            const team = {
                name: data.name,
                country: data.country,
                isActive: data.isActive,
                year: data.year
            }

            const createdTeam = await new Team(team).save()
            return createdTeam;
        } catch (error) {
            throw new BadRequest(`Error occurred while saving the team.`)
        }
    }

    static async updateFullTeam(data, id) {
        try {
            const updatedTeam = await Team.replaceOne({ _id: id }, data)
            return updatedTeam;
        } catch (error) {
            throw new GeneralError(`Error occurred while updating the team with id: ${id}`)
        }
    }

    static async updateTeam(data, id) {
        try {
            const updatedTeam = await Team.updateOne({ _id: id }, data)
            return updatedTeam;
        } catch (error) {
            throw new GeneralError(`Error occurred while updating the team with id: ${id}`)
        }
    }

    // Hard Delete - actually deleting/removing the document from the db

    // Soft Delete - not really deleting, just marking it as deleted
    // deletedAt - 2021-05-26T17:01:21.361+00:00
    // isDeleted = true

    static async deleteTeam(id) {
        try {
            const deleted = await Team.deleteOne({ _id: id });
            return deleted;
        } catch (error) {
            throw new GeneralError(`Error occurred while deleting the team with id: ${id}`)
        }
    }
}