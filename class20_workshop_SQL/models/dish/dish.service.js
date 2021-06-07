const ts = require('../../common/db/text-service')
const { v4: uuidv4 } = require('uuid');
const Dish = require('./Dish.model');

class DishService {
    static getAllDishes() {
        return Dish.findAll()
    }

    static getDish(id) {
        return Dish.findByPk(id);
    }

    static createDish(data) {
        return Dish.create(data)
    }

    static updateDish(id, data) {
        Dish.update({ name: data.name, price: data.price }, {
            where: {
                id: id
            }
        })
    }

    static deleteDish(id) {
        return Dish.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = DishService;