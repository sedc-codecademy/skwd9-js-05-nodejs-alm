const router = require('express').Router()
const teamsRoutes = require("../routes/teams.routes")

router.use('/teams', teamsRoutes)


module.exports = router;