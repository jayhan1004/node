var express = require('express');
var router = express.Router();

/* 도서검색 */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: '도서검색' , pageName:'book/search.ejs'}); //render : ejs파일 출력해줌
});

module.exports = router;