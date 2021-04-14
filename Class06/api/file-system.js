const fs = require('fs');
const path = require('path');

const getData = (file) => {
    return fs.readFileSync(
        path.join(__dirname, 'db', file), 
        err => {
            if (err) throw err
    })
}

module.exports = {
    getData
}