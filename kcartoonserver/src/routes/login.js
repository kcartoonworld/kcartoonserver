var express = require('express');
var router = express.Router();

var loginController = require('../controller/loginController');

router.post('/', loginController.postLogin);

module.exports = router;