const router = require('express').Router()
const dishRoutes = require('../../models/dish/dish.routes')
const ordersRoutes = require('../../models/orders/orders.routes')
const authRoutes = require('../../models/auth/auth.routes')


router.use('/dish', dishRoutes)
router.use('/orders', ordersRoutes)
router.use('/auth', authRoutes)

module.exports = router;