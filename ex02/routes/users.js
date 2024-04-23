var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource'); //send : 입력한 말을 출력함
});

module.exports = router;
