const router = require('express').Router();
const adminGuard = require('../helpers/admin-guard');
const authenticate = require('../helpers/verify-token');

router.get('/', authenticate, (req, res) => {
    res.status(200).send(['Dog', 'Cat', 'Lion', 'Bear', 'Wolf']);
})

router.post('/', authenticate, adminGuard, (req, res) => {
    res.status(201).send({message: 'Animal has been added!'})
})

module.exports = router;