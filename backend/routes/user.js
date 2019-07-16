const express = require('express');
const router = express.Router();
const userController = require('../controller/userController.js')

module.exports = router;



// to retrieve the data
router.post("/getUserData", userController.getUserData);