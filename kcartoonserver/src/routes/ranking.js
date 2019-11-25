var express = require('express');
var router = express.Router();

var rankingController = require('../controller/rankingController');

router.get('/', rankingController.getRanking);

module.exports = router;