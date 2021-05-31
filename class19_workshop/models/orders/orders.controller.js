const OrderService = require("./orders.service");

class OrderController {
    static async createOrder(id) {
        try {
            const order = await OrderService.createOrder(id);
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = OrderController;