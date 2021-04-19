const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Message from the inventory router!"
    })
});

module.exports = router;