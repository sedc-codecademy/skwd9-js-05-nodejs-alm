const router = require('express').Router();
const authRoutes = require('./routes/auth.routes');
const animalRoutes = require('./routes/animals.routes')

router.use('/auth', authRoutes)
router.use('/animals', animalRoutes)

module.exports = router;