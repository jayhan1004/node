var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '짹짹이게시판', pageName:'bbs.ejs' });
});

module.exports = router;