var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("학번 : 2016320129 이름 : 박성훈")
});

module.exports = router;
