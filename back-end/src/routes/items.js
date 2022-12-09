const express = require('express');
const router = express.Router();
const ItemController = require('../app/controllers/ItemController');
const { verifyUser } = require('../utils/verifyToken');

router.post('/', ItemController.createItem);
router.get('/', ItemController.getItems);
router.get('/:id', ItemController.getItem);
router.delete('/', ItemController.deleteAllItems);

module.exports = router;
