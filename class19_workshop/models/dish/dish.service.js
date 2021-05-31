const ts = require('../../common/db/text-service')
const { v4: uuidv4 } = require('uuid')

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

    static getDish(id) {
        return new Promise((resolve, reject) => {
            const dishes = ts.readData('dishes.json');
            const dish = dishes.find(d => d.id === id);

            if (!dish) {
                reject({ message: `Dish with an ID:${id} doesn't exist.`})
            }

            resolve(dish)
        })
    }

    static createDish(data) {
        return new Promise((resolve, reject) => {
            const dishes = ts.readData('dishes.json');

            const exists = dishes.some(d => d.name === data.name);

            if (exists) {
                reject({ message: `Dish with the name ${data.name} already exists.`})
            }

            const dish = {
                id: uuidv4(),
                ...data
            }

            dishes.push(dish);

            ts.writeData('dishes.json', dishes);

            resolve(dish);
        })
    }

    static updateDish(id, data) {
        return new Promise((resolve, reject) => {
            const dishes = ts.readData('dishes.json');
            const dishIndex = dishes.findIndex(d => d.id === id)

            if (dishIndex < 0) {
                reject({ message: `Dish with ID:${id} does not exist.` })
            }

            dishes[dishIndex] = {
                ...dishes[dishIndex],
                ...data
            }

            ts.writeData('dishes.json', dishes);

            resolve(dishes[dishIndex]);
        })
    }

    static deleteDish(id) {
        return new Promise((resolve, reject) => {
            const dishes = ts.readData('dishes.json');
            const filteredDishes = dishes.filter(d => d.id !== id);

            if (filteredDishes?.length === dishes?.length) {
                reject({ message: `The dish with ID:${id} does not exist.`})
            }

            ts.writeData('dishes.json', filteredDishes);

            resolve(filteredDishes);
        })
    }
}

module.exports = DishService;