var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: '도서검색' , pageName:'home.ejs'}); //render : ejs파일 출력해줌
});

module.exports = router;
