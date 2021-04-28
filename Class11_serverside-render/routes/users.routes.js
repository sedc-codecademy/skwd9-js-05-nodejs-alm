const router = require('express').Router();
const ts = require('../textService');

router.get('/', (req, res) => {
    const text = ts.readDataFromDb('db.json');
    const data = JSON.parse(text);

    res.status(200).json(data);
});

module.exports = router;