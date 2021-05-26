const router = require('express').Router()
const teamsRoutes = require("../routes/teams.routes")
const playersRoutes = require('../routes/players.routes')

router.use('/teams', teamsRoutes)
router.use('/players', playersRoutes)

module.exports = router;