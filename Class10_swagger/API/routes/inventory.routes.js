const router = require("express").Router();
const InventoryController = require("../controllers/inventory.controller");

const inventoryController = new InventoryController();

/**
 * @swagger
 * components:
 *      schemas:
 *          InventoryItem:
 *                type: object
 *                required:
 *                    - title
 *                    - price
 *                properties:
 *                    id:
 *                        type: string
 *                        description: Auto generated ID
 *                    title:
 *                        type: string
 *                        description: Title of the inventory item
 *                    price:
 *                        type: integer
 *                        description: The price of the inventory item
 */

/**
 * @swagger
 * tags:
 *    name: Inventory
 *    description: The inventory managing APIs
 */

/** 
 * @swagger
 * /inventory:
 *    get:
 *        summary: Returns all items from the inventory list
 *        tags: [Inventory]
 *        responses: 
 *            200:
 *                description: All items from the inventory list are being returned.
 *                content:
 *                    application/json:
 *                          schema:
 *                              type: object
 *                              $ref: '#/components/schemas/InventoryItem'
*/

router.get('', (req, res) => {
  inventoryController
      .fetchAllInventoryItems()
      .then((items) => {
        res.status(200).json(items.inventory);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
})

/**
 * @swagger
 * /inventory/{id}:
 *   get:
 *     summary: Get inventory item by id
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The inventory items' id
 *     responses:
 *       200:
 *         description: The inventory item description by id
 *         contents:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/InventoryItem'
 *       400:
 *         description: The inventory item was not found
 */

router.get("/:id", (req, res) => {
    const itemId = req.params.id;
    inventoryController
        .fetchInventoryItemById(itemId)
        .then((item) => {
            res.status(200).json(item);
        })
        .catch((error) => {
            res.status(400).json(error);
        })
});

/**
 * @swagger
 * /inventory:
 *   post:
 *     summary: Create a new inventory item
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InventoryItem'
 *     responses:
 *       200:
 *         description: The inventory item was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InventoryItem'
 *       500:
 *         description: Some server error
 */

router.post('/', (req, res) => {
  const item = req.body;
  inventoryController.postInventoryItem(item).then((response) => {
    res.status(200).json(response);
  })
})

/**
 * @swagger
 * /inventory/{id}:
 *   delete:
 *     summary: Remove the inventory item by id
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The inventory item id
 *     responses:
 *       200:
 *         description: The inventory item was deleted
 *       404:
 *         description: The inventory item was not found
 */

router.delete('/:id?', (req, res) => {
  const id = req.params.id;
  if (id) {
    inventoryController.deleteInventoryItem(id).then((response) => {
      res.status(200).json(response);
    })
  }
})

/**
 * @swagger
 * /inventory/{id}:
 *  put:
 *    summary: Update the inventory item by the id
 *    tags: [Inventory]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The inventory item id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/InventoryItem'
 *    responses:
 *      200:
 *        description: The inventory item was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/InventoryItem'
 *      404:
 *        description: The inventory item was not found
 *      500:
 *        description: Some error happened
 */

router.put("/:id?", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  if (id && body) {
    inventoryController.updateInventoryItem(id, body).then((response) => {
      res.status(200).json(response);
    });
  }
});

module.exports = router;
