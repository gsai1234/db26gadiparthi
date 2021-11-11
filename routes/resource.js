var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var guava_controller = require('../controllers/guava'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/guavas', guava_controller.guava_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/guavas/:id', guava_controller.guava_delete); 
 
// PUT request to update Costume. 
router.put('/resource/guavas/:id', 
guava_controller.guava_update_put); 
 
// GET request for one Costume. 
router.get('/resource/guavas/:id', guava_controller.guava_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/guavas', guava_controller.guava_list); 
 
module.exports = router; 