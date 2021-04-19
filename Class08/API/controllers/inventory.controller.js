const InventoryModel = require('../models/inventory.model');
const inventoryModel = new InventoryModel();

class InventoryController {
    fetchAllInventoryItems () {
        return inventoryModel.getAllInventoryItems();
    }

    fetchInventoryItemById(itemId) {
        return inventoryModel.getInventoryItemById(itemId);
    }

}

module.exports = InventoryController;