const Team = require('../models/team.model')

module.exports = class TeamsService {
    static async getAllTeams() {
        try {
            const teams = await Team.find();
            console.log(teams)
            if (!teams) {
                return [];
            }
            return teams;
        } catch (error) {
            console.log(`Could not get all teams. ERROR: ${error}`)
        }
    }

    static async getTeamById(id) {
        try {
            // bad way
            // const teams = await this.getAllTeams();
            // const team = teams.find(t => t.id === id);
            // return team;

            // good way
            const team = await Team.findById({ _id: id });
            return team;
        } catch (error) {
            console.log(`Failed while trying to get team with ID: ${id}`, error)
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
            console.log(`Error while creating a team. ERROR: ${error}`)
        }
    }
}