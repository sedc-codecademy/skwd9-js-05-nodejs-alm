const router = require("express").Router();
const InventoryController = require("../controllers/inventory.controller");

const inventoryController = new InventoryController();

// router.get('/', (req, res) => {
//     res.status(200).json({
//         message: "Message from the inventory router!"
//     })
// });

router.get("/:id?", (req, res) => {
  if (req.params && req.params.id) {
    const itemId = req.params.id;
    inventoryController
        .fetchInventoryItemById(itemId)
        .then((item) => {
            res.status(200).json(item);
        })
        .catch((error) => {
            res.status(400).json(error);
        })
  } else {
    inventoryController
      .fetchAllInventoryItems()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  }
});

module.exports = router;
