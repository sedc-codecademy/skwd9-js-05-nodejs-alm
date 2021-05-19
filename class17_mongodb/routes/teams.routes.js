const router = require('express').Router();
const TeamsController = require('../controllers/teams.controller');

router.get('/', TeamsController.getAllTeams)
// router.get(':id')

module.exports = router;