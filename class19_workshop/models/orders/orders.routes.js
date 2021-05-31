const router = require('express').Router();
const OrderController = require('./orders.controller')

router.post('/:id', OrderController.createOrder)

module.exports = router;