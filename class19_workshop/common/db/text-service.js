const fs = require('fs')
const path = require('path')


const writeData = (file, data) => {
    const stringifiedData = JSON.stringify(data);
    fs.writeFileSync(path.join(__dirname, file), stringifiedData, err => {
        if (err) throw err
    })
}

const readData = (file) => {
    const data = fs.readFileSync(path.join(__dirname, file), { encoding: 'utf-8' });
    return JSON.parse(data);
}

module.exports = {
    writeData,
    readData
}