var express = require('express');
var router = express.Router();

var signupController = require('../controller/signupController');

router.post('/', signupController.postSignup);

module.exports = router;