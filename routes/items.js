var express = require('express');
const item_controlers= require('../controllers/item');
var router = express.Router();
/* GET costumes */
router.get('/', item_controlers.item_view_all_Page );
module.exports = router;