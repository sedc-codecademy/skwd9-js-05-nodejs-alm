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

const deleteData = (id, file) => {
    let items = JSON.parse(getData(file));
    items = items.filter(item => item.id !== id);

    return fs.writeFileSync(
        path.join(__dirname, 'db', file),
        JSON.stringify(items),
        err => {
            if (err) throw err
        }
    )
}

const updateData = (id, data, file) => {
    let items = JSON.parse(getData(file));

    let index = items.findIndex(item => item.id === id);

    if (!index && index !== 0) {
        throw new Error('Animal not existing in DB!');
    }

    items[index] = { ...items[index], ...data}

    fs.writeFileSync(path.join(__dirname, 'db', file), JSON.stringify(items), err => {
        if (err) throw err
    })

    return items[index];
}

module.exports = {
    getData,
    addData,
    deleteData,
    updateData
}