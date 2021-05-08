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

const addToken = token => {
    const tokens = getTokens();
    tokens.push(token);
    fs.writeFileSync('./tokens.json', JSON.stringify(tokens), err => {
        if (err) throw err;
    });
}

const getTokens = () => JSON.parse(fs.readFileSync('./tokens.json', { encoding: 'utf-8'}, err => {
    if (err) throw err
}))

module.exports = {
    writeUser,
    readUsers,
    addToken,
    getTokens
}