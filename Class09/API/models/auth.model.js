const ts = require('../textService');

class AuthModel {
    loginWithUsernameAndPassword (credentials) {
        return new Promise((resolve, reject) => {
            const text = ts.readDataFromDb('db.json');
            const dbData = JSON.parse(text); // dbData is an array
            const filtered = dbData.filter((user) => {
                if (
                    credentials.username === user.username &&
                    credentials.password === user.password
                ) {
                    return true;
                }
                return false;
            })

            if (filtered && filtered.length > 0) {
                resolve({
                    message: "User logged in!",
                })
            } else {
                reject({
                    message: "Unknown username or password!",
                })
            }
        })
    }
}

module.exports = AuthModel;