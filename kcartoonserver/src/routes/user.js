var express = require('express');
var router = express.Router();

const userController = require('../controller/userController');

router.get('/mycomic', userController.getMyComic);
router.put('/password', userController.putPassword);
router.get('/', userController.getUser);

module.exports = router;