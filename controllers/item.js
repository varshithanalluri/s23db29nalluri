var item = require('../models/item');
// List of all Costumes
exports.item_list = async function(req, res) {
    try{
    theCostumes = await item.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   
// for a specific Costume.
exports.item_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await item.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
// Handle Costume create on POST.
exports.item_create_post = async function(req, res) {
    console.log(req.body)
    let document = new item();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.item_name = req.body.item_name;
    document.category = req.body.category;
    document.quantity = req.body.quantity;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
// Handle Costume delete form on DELETE.
exports.item_delete = exports.item_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await item.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
// Handle Costume update form on PUT.
exports.item_update_put =async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await item.findById( req.params.id)
    // Do updates of properties
    if(req.body.item_name) toUpdate.item_name = req.body.item_name;
    if(req.body.category) toUpdate.category = req.body.category;
    if(req.body.quantity) toUpdate.quantity = req.body.quantity;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    exports.item_view_all_Page = async function(req, res) {
        try{
        theCostumes = await item.find();
        res.render('items', { title: 'item Search Results', results: theCostumes });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        } 
       };

    exports.item_view_one_Page = async function(req, res) {
        console.log("single view for id " + req.query.id)
        try{
        result = await item.findById( req.query.id)
        res.render('itemdetail',
        { title: 'item Detail', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };
   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.item_create_Page = function(req, res) {
console.log("create view")
try{
res.render('itemcreate', { title: 'item create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for updating a costume.
// query provides the id
exports.item_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await item.findById(req.query.id)
    res.render('itemupdate', { title: 'item Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a delete one view with id from query
exports.item_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await item.findById(req.query.id)
    res.render('itemdelete', { title: 'item Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

