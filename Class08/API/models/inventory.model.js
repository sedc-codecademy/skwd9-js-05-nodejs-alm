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
}

module.exports = InventoryModel;
