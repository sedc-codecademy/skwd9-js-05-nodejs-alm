const fs = require('fs');
const path = require('path');

const getData = (file) => {
    return fs.readFileSync(
        path.join(__dirname, 'db', file), 
        err => {
            if (err) throw err
    })
}

const addData = (data, file) => {
    let items = JSON.parse(getData(file));

    items = [...items, data];

    return fs.writeFileSync(
        path.join(__dirname, 'db', file),
        JSON.stringify(items),
        err => {
            if (err) throw err
        })
}

module.exports = {
    getData,
    addData
}