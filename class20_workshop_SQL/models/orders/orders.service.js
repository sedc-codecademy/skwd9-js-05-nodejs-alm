const ts = require("../../common/db/text-service");
const OrderStatus = require("../../common/models/order-status.enum");
const Order = require("./Order.model");
const DishService = require("../dish/dish.service");

class OrderService {
  static async createOrder(dishId) {
    const dish = await DishService.getDish(dishId);

    if (!dish) {
      throw new Error("Dish does not exist.");
    }

    const order = {
      dishName: dish.name,
      status: OrderStatus.new,
    };

    return Order.create(order);
  }

  static updateOrderStatus(id, status) {
    Order.update({ status }, { returning: true, where: { id } });
  }
}

module.exports = OrderService;
