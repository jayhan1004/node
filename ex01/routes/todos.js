var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '오늘의 짹짹 할 일', pageName:'todos.ejs' });
});

module.exports = router;