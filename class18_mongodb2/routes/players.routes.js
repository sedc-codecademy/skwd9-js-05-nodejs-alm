const router = require('express').Router()
const PlayersController = require('../controllers/players.controller')

router.get('/', PlayersController.getAllPlayers)
router.get('/:id', PlayersController.getPlayerById)
router.post('/', PlayersController.createPlayer)

module.exports = router;