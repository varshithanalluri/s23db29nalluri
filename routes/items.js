var express = require('express');
const item_controllers= require('../controllers/item');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
// GET home page. 
router.get('/', item_controllers.item_view_all_Page );

/* GET detail costume page */
router.get('/detail',secured, item_controllers.item_view_one_Page);
router.get('/create',secured, item_controllers.item_create_Page);
router.get('/update',secured, item_controllers.item_update_Page);
router.get('/delete',secured, item_controllers.item_delete_Page);
module.exports = router;