var express = require('express');
var router = express.Router();

/* GET choose page. */
router.get('/', function(req, res, next) {
  res.render('choose', { title: 'Choose' });
});

module.exports = router;