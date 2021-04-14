const fs = require('fs');
const path = require('path');

const getData = () => {
    return fs.readFileSync(path.join(__dirname, 'db', 'carousel-images.json'), err => {
        if (err) throw err
    })
}

module.exports = {
    getData
}