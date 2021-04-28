const router = require('express').Router();

const admin = require('./routes/admin.routes');
const users = require('./routes/users.routes');

router.use('/admin', admin);
router.use('/users', users);

module.exports = router;