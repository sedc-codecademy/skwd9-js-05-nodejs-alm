const DishService = require('./dish.service')

class DishController {
    static async getAllDishes(req, res, next) {
        try {
            const dishes = await DishService.getAllDishes();
            res.status(200).json(dishes)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getDish(req, res, next) {
        try {
            const dish = await DishService.getDish(req.params.id)
            res.status(200).json(dish);
        } catch (error) {
            res.status(500).json(error)
        }
        
    }

    static async createDish(req, res, next) {
        try {
            const createdDish = await DishService.createDish(req.body);
            res.status(201).json(createdDish)
        } catch (error) {
            res.status(500).json(error)
        }
        
    }

    static async updateDish(req, res, next) {
        console.log('DishController.updateDish', req.params.id, req.body)
        try {
            const updatedDish = await DishService.updateDish(req.params.id, req.body);
            res.status(200).json(updatedDish);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async deleteDish(req, res, next) {
        console.log(req.params)
        try {
            const deleted = await DishService.deleteDish(req.params.id)
            res.status(200).json(deleted)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = DishController;