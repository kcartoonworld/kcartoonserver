var express = require('express');
var upload = require('../../config/multer');
var router = express.Router();

var comicController = require('../controller/comicController');


router.post('/upload', upload.fields([{name : 'img'}, {name : 'cutImg'}]), comicController.postComic);
router.post('/:comicIdx/upload', upload.single('img'), comicController.postCut);
router.post('/:comicIdx/vote', comicController.postCutVote);
router.get('/:comicIdx/vote', comicController.getCutVoteList);
router.get('/:comicIdx', comicController.getComicDetail);
router.get('/', comicController.getComic);

module.exports = router;