const InventoryModel = require('../models/inventory.model');
const inventoryModel = new InventoryModel();

class InventoryController {
    fetchAllInventoryItems () {
        // const result = inventoryModel.getAllInventoryItems();
        // return result;
        // Same as
        return inventoryModel.getAllInventoryItems();
    }

    fetchInventoryItemById(itemId) {
        return inventoryModel.getInventoryItemById(itemId);
    }

    postInventoryItem(item) {
        return inventoryModel.insertNewInventoryItem(item);
    }

    deleteInventoryItem(itemId) {
        return inventoryModel.deleteInventoryItem(itemId);
    }

}

module.exports = InventoryController;