const router = require('express').Router();
const TeamsController = require('../controllers/teams.controller');

router.get('/', TeamsController.getAllTeams)
router.post('/', TeamsController.createTeam)
router.get('/:id', TeamsController.getTeamById)

module.exports = router;