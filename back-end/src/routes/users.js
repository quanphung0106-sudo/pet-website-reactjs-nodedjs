const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/UserController');

router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.delete('/', UserController.deleteAllUsers);

module.exports = router;
