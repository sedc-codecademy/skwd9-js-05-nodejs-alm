const ts = require('../../common/db/text-service')

class DishService {
    static getAllDishes() {
        return new Promise((resolve, reject) => {
            const dishes = ts.readData('dishes.json');
            if (!dishes) {
                reject({ message: 'No dishes available.'})
            }
            resolve(dishes)
        })
    }

    static async getDish(id) {

    }

    static async createDish() {

    }

    static async updateDish(id) {

    }

    static async deleteDish(id) {

    }
}

module.exports = DishService;