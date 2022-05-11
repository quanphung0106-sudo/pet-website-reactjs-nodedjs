const express = require('express');
const router = express.Router();
const ItemController = require('../app/controllers/ItemController');

router.post('/', ItemController.createItem);
router.get('/', ItemController.getItems);
router.get('/:id', ItemController.getItem);
router.delete('/', ItemController.deleteAllItems);

module.exports = router;
