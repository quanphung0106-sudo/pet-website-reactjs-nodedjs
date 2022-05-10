const express = require('express');
const router = express.Router();
const ItemController = require('../app/controllers/ItemController');

router.post('/', ItemController.createItem);
router.get('/', ItemController.getItems);
router.delete('/', ItemController.deleteAllItems);

module.exports = router;
