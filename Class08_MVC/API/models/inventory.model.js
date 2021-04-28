const textService = require("../textService");
const { v4: uuidv4 } = require("uuid");

class InventoryModel {
  getAllInventoryItems() {
    return new Promise((resolve, reject) => {
      const text = textService.readDataFromDb("inventory.json");
      resolve(JSON.parse(text));
    });
  }

  getInventoryItemById(itemId) {
    return new Promise((resolve, reject) => {
      const text = textService.readDataFromDb("inventory.json");
      const data = JSON.parse(text);

      // We add [0] at the end, because filter returns an array with one element.
      const item = data.inventory.filter((item) => item.id === itemId)[0];

      if (item) {
        resolve(item);
      } else {
        reject({
          message: "Error! No such item found!",
        });
      }
    });
  }

  insertNewInventoryItem (item) {
    return new Promise((resolve, reject) => {
      item.id = uuidv4();

      // Get the data from the DB as it is
      const dbDataText = textService.readDataFromDb('inventory.json');
      // Convert the data from text to an object
      const dbData = JSON.parse(dbDataText);
      // Push the new item to the data array
      dbData.inventory.push(item);
      // Stringify the data object
      const dbDataStringified = JSON.stringify(dbData);
      // Write the newly created string to the database
      textService.writeDataToDb('inventory.json', dbDataStringified);

      resolve({
        message: 'Item successfully added!'
      })
    })
  }

  deleteInventoryItem (itemId) {
    return new Promise((resolve, reject) => {
      const dbDataText = textService.readDataFromDb('inventory.json');
      const dbData = JSON.parse(dbDataText);

      const filtered = dbData.inventory.filter((item) => item.id !== itemId);
      dbData.inventory = filtered;

      const dbDataStringified = JSON.stringify(dbData);
      textService.writeDataToDb('inventory.json', dbDataStringified);

      resolve({
        message: 'Item successfully added!'
      })
    })
  }

  putInventoryItem (id, body) {
    return new Promise((resolve, reject) => {
      const dbDataText = textService.readDataFromDb('inventory.json');
      const dbData = JSON.parse(dbDataText);

      dbData.inventory.forEach((item) => {
        if (item.id === id) {
          item.title = body.title;
          item.price = body.price;
        }
      });

      const stringified = JSON.stringify(dbData);
      textService.writeDataToDb('inventory.json', stringified);

      resolve({
        message: "Item successfully updated!"
      })
      
    })
  }

}

module.exports = InventoryModel;
