const router = require('express').Router()
const dishRoutes = require('../../models/dish/dish.routes')
const ordersRoutes = require('../../models/orders/orders.routes')
const authRoutes = require('../../models/auth/auth.routes')
const validateSession = require('../../common/const/validate-session.const')

router.use('/dish', validateSession, dishRoutes)
router.use('/orders', validateSession, ordersRoutes)
router.use('/auth', authRoutes)

module.exports = router;