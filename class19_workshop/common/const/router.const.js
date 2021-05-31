const router = require('express').Router()
const dishRoutes = require('../../models/dish/dish.routes')

router.use('/dish', dishRoutes)

module.exports = router;