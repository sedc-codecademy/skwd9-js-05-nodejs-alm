const validateSession = (req, res, next) => {
    next()
    // if (req.cookies?.session_id === process.env?.session_id) {
    //     next();
    // } else {
    //     res.status(403).json({
    //         message: 'ERROR: You are not authenticated.'
    //     })
    // }
}

module.exports = validateSession;