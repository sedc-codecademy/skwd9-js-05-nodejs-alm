const router = require('express').Router()
const DishController = require('./dish.controller');
const adminGuard = require('../../common/guards/admin.guard')

router.get('', DishController.getAllDishes)
router.get('/:id', DishController.getDish)
router.post('', adminGuard, DishController.createDish)
router.put('/:id', adminGuard, DishController.updateDish)
router.delete('/:id', adminGuard, DishController.deleteDish)

module.exports = router;