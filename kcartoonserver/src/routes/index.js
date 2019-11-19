var express = require('express');
var router = express.Router();

router.use('/login', require('./login'));
router.use('/signup', require('./signup'));
// router.use('/main', require('./main'));
// router.use('/comic',require('./comic'));
// router.use('/ranking', require('./ranking'));
// router.use('/user', require('./user'));

module.exports = router;
