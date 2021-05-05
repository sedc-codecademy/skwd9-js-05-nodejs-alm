const fs = require('fs');

const writeUsers = users => {
    fs.writeFileSync('./db.json', JSON.stringify(users), err => {
        if (err) throw err;
    });
}

const readUsers = () => JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8'}, err => {
    if (err) throw err
}))

module.exports = {
    writeUsers,
    readUsers
}