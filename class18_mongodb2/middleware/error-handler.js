const { GeneralError } = require('../const/error.const')

const errorHandler = (err, req, res, next) => {
    if (err instanceof GeneralError) {
        res.status(err.getCode()).json({
            status: 'Error',
            message: err.message
        })
    }

    res.status(500).json({
        status: "Error",
        message: err.message
    })
}

module.exports = errorHandler;