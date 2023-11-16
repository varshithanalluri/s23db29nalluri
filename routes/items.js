var express = require('express');
const item_controlers= require('../controllers/item');
var router = express.Router();
/* GET costumes */
router.get('/', item_controlers.item_view_all_Page );
router.get('/detail', item_controlers.item_view_one_Page)
router.get('/create', item_controlers.item_create_Page)
module.exports = router;