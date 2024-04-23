var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '오목눈이네 홈페EZ', pageName:'home.ejs' });
});

module.exports = router;
