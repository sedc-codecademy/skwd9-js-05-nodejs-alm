const router = require('express').Router()
const dishRoutes = require('../../models/dish/dish.routes')
const ordersRoutes = require('../../models/orders/orders.routes')

router.use('/dish', dishRoutes)
router.use('/orders', ordersRoutes)

module.exports = router;