const ts = require('../textService');

class UserModel {
  getUsers() {
    return new Promise((resolve, reject) => {
      const text = ts.readDataFromDb("db.json");
      const data = JSON.parse(text);
      resolve(data);
    });
  }
}

module.exports = UserModel;