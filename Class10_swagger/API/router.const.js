const router = require('express').Router();
const inventory = require('./routes/inventory.routes');

router.use('/inventory', inventory);

module.exports = router;