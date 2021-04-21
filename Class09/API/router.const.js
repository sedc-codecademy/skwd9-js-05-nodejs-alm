const router = require('express').Router();
const auth = require('./routes/auth.routes');

router.use('/auth', auth);

module.exports = router;