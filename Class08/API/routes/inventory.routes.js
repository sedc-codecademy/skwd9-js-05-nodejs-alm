const router = require("express").Router();
const InventoryController = require("../controllers/inventory.controller");

const inventoryController = new InventoryController();

// router.get('/', (req, res) => {
//     res.status(200).json({
//         message: "Message from the inventory router!"
//     })
// });

router.get("/:id?", (req, res) => {
  // the name of the query param in the route will define the name of the property in req.params
  // So for example :/email? it means req.params.email

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

router.post('/', (req, res) => {
  const item = req.body;
  inventoryController.postInventoryItem(item).then((response) => {
    res.status(200).json(response);
  })
})

router.delete('/:id?', (req, res) => {
  const id = req.params.id;
  if (id) {
    inventoryController.deleteInventoryItem(id).then((response) => {
      res.status(200).json(response);
    })
  }
})

module.exports = router;
