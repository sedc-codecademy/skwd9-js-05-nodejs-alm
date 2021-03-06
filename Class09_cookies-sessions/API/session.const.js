const session = require('express-session');

module.exports = session({
    secret: ['asdfghjklas'], // To update the secret, add a new value, don't delete old ones
    name: 'cookie_id',
    cookie: {
        maxAge: 5 * 60 * 60 * 1000,
    },
    saveUninitialized: true,
    resave: false
});