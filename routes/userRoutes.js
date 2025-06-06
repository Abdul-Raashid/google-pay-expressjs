// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users/:userId', userController.getUser);

module.exports = router;