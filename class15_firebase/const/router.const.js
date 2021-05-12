const router = require('express').Router();
const auth = require('../routes/auth.routes');
const posts = require('../routes/posts.routes');

router.use('/auth', auth);
router.use('/posts', posts);

module.exports = router;