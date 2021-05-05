const textService = require('../text-service');
const router = require('express').Router();

// Register endpoint
router.post('/register', (req, res) => {

    // Validate the client data

    // Check if the user already exists

    // Create a new User

    // Save the user to the DB

    // email, password, fullName, age, gender

    res.send('Register api')
})

// Login endpoint
router.post('/login', (req, res) => {
    res.send('Login api')
})

module.exports = router;