var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Animals', { title: 'Search results of Animals' });
});

module.exports = router;
