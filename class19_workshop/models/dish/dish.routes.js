const router = require('express').Router()
const DishController = require('./dish.controller');

router.get('', DishController.getAllDishes)
router.get('/:id', DishController.getDish)
router.post('', DishController.createDish)
router.put('/:id', DishController.updateDish)
router.delete('/:id', DishController.deleteDish)

module.exports = router;