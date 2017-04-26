var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pixel_page', { title: 'Beast-Jesus app for real!' });
});

module.exports = router;
