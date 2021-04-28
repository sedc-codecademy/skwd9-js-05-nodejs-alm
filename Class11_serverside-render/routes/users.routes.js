const router = require('express').Router();
const ts = require('../textService');
const path = require('path');
const root = require('../util/path.util');

router.get('/', (req, res) => {
    const text = ts.readDataFromDb('db.json');
    const data = JSON.parse(text);

    // res.status(200).json(data);
    // res.sendFile(path.join(root ,'views', 'users-list.html'));
    res.status(200).render('users-list', {
        users: data,
        pageTitle: 'Users',
        hasUsers: data.length > 0
    })
});

module.exports = router;