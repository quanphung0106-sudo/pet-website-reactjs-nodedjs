const express = require('express');
const router = express.Router();
const AuthController = require('../app/controllers/AuthController');

router.post('/login', AuthController.userLogin);
router.post('/register', AuthController.userRegister);
router.get('/tokens', AuthController.getToken);
router.post('/token', AuthController.activeAccount);
router.delete('/tokens', AuthController.deleteTokens);

module.exports = router;
