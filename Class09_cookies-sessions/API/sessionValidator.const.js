const validateSession = (req, res, next) => {
    console.log(req.sessionID);
    console.log(req.session);
    if (req.session.authenticated) {
        next();
    } else {
        res.status(400).json({
            message: 'Error! You are not authenticated!'
        })
    }
}

module.exports = validateSession;