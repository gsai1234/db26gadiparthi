var guava = require('../models/guava'); 
 
// List of all guavas 
exports.guava_list = async function(req, res) { 
    try{ 
        theguavas = await guava.find(); 
        res.send(theguavas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }    
}; 

// VIEWS
// Handle a show all view
exports.guava_view_all_Page = async function (req, res) {
    try {
        theguavas = await guava.find();
        res.render("guava", {
        title: "guava Search Results",
        results: theguavas,
      });
    } catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
    }
  };
  

 
// for a specific guava. 
exports.guava_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: guava detail: ' + req.params.id); 
}; 
 

 
// Handle guava delete form on DELETE. 
exports.guava_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: guava delete DELETE ' + req.params.id); 
}; 
 
// Handle guava update form on PUT. 
exports.guava_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: guava update PUT' + req.params.id); 
}; 

// Handle Costume create on POST. 
exports.guava_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new guava(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"guava_type":"goat", "guava_model":12, "cost":"large"} 
    document.guava_type = req.body.guava_type; 
    document.guava_model = req.body.guava_model; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 