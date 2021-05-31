const router = require('express').Router();
const OrderController = require('./orders.controller');
const OrderService = require('./orders.service');

router.post('/:id', OrderController.createOrder)
router.put('/:id/order-status', OrderController.updateOrderStatus)

module.exports = router;