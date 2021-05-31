const OrderService = require("./orders.service");

class OrderController {
  static async createOrder(req, res, next) {
    try {
      const order = await OrderService.createOrder(req.params.id);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateOrderStatus(req, res, next) {
    try {
      const order = await OrderService.updateOrderStatus(
        req.params.id,
        req.body.status
      );
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = OrderController;
