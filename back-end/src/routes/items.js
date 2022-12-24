const express = require('express');
const router = express.Router();
const ItemController = require('../app/controllers/ItemController');
const { verifyAdmin } = require('../utils/verifyToken');

router.post('/', verifyAdmin, ItemController.createItem);
router.get('/', verifyAdmin, ItemController.getItems);
router.get('/:id', ItemController.getItem);
router.delete('/', verifyAdmin, ItemController.deleteAllItems);
router.delete('/:id', verifyAdmin, ItemController.deleteItem);

module.exports = router;
