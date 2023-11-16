var express = require('express');
const item_controlers= require('../controllers/item');
var router = express.Router();
/* GET costumes */
router.get('/', item_controlers.item_view_all_Page );
router.get('/detail', item_controlers.item_view_one_Page);
router.get('/create', item_controlers.item_create_Page);
router.get('/update', item_controlers.item_update_Page);

module.exports = router;