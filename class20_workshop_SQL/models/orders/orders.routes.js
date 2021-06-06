const router = require('express').Router();
const OrderController = require('./orders.controller');
const adminGuard = require('../../common/guards/admin.guard')

router.post('/:id', OrderController.createOrder)
router.put('/:id/order-status', adminGuard, OrderController.updateOrderStatus)

module.exports = router;