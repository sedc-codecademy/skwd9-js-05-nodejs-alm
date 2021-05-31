const ts = require('../../common/db/text-service')
const { v4: uuidv4 } = require('uuid');
const OrderStatus = require('../../common/models/order-status.enum')

class OrderService {
    static createOrder(id) {
        return new Promise((resolve, reject) => {
            const dishes = ts.readData('dishes.json');
            const orders = ts.readData('orders.json');

            const dish = dishes.find(d => d.id === id);

            if (!dish) {
                reject({ message: `Dish with ID: ${id} doesn't exist.`})
            }

            const order = {
                id: uuidv4(),
                dishName: dish.name,
                status: OrderStatus.new
            }

            orders.push(order);

            ts.writeData('orders.json', orders)

            resolve(order);
        })
    }

    static updateOrderStatus(id, status) {
        return new Promise((resolve, reject) => {
            const orders = ts.readData('orders.json');

            const orderIndex = orders.findIndex(o => o.id === id);

            if (orderIndex < 0) {
                reject({ message: `Order with ID ${id} doesn't exist.`})
            }

            orders[orderIndex].status = status;

            ts.writeData('orders.json', orders);

            resolve(orders[orderIndex])
        })
    }
}

module.exports = OrderService;