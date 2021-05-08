const fs = require('fs');

const writeUser = user => {
    const users = readUsers();
    users.push(user);
    fs.writeFileSync('./db.json', JSON.stringify(users), err => {
        if (err) throw err;
    });
}

const readUsers = () => JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8'}, err => {
    if (err) throw err
}))

module.exports = {
    writeUser,
    readUsers
}