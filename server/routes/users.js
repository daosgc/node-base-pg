var express = require('express');
var router = express.Router();
const userController = require('../controllers').user;

/* GET users listing. */
router.get('/', userController.all);

module.exports = router;
