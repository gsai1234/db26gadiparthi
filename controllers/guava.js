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

exports.guava_detail = async function(req, res)
 {    
      console.log("detail" + req.params.id)    
 try {    
         result = await Maruti.findById( req.params.id)       
         res.send(result)        }
     catch (error) {          
                    res.status(500)    
                      res.send(`{"error": document for id ${req.params.id} not found`);     
               }   
          }; 


 

 
// Handle guava delete form on DELETE. 
exports.guava_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: guava delete DELETE ' + req.params.id); 
}; 
 
// Handle guava update form on PUT. 
exports.guava_update_put = async function(req, res) { 
//res.send('NOT IMPLEMENTED: guava update PUT' + req.params.id); 
console.log(`update on id ${req.params.id} with body${JSON.stringify(req.body)}`) 

  try{       
         let toUpdate =  await guava.findById( req.params.id)       
         // Do updates of properties       
          if(req.body.guava_type)
              toUpdate.guava_type = req.body.guava_type;
          if(req.body.weight)
              toUpdate.weight = req.body.weight;
          if(req.body.cost)
              toUpdate.cost = req.body.cost;
          let result = await toUpdate.save();
          console.log("Sucess " + result)
          res.send(result)
     }catch(err){
          res.status(500)
          res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
                }
    if(req.body.checkboxsale) toUpdate.sale = true;
    else toUpdate.same = false;
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

// Handle guava delete on DELETE. 
exports.guava_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await guava.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};

// Handle a show one view with id specified by params 
exports.guava_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await guava.findById( req.query.id) 
        res.render('guavadetail',  
{ title: 'guava Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

 // Handle building the view for creating a guava. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.guava_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('guavacreate', { title: 'guava Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a guava. 
// query provides the id 
exports.guava_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await guava.findById(req.query.id) 
        res.render('guavaupdate', { title: 'guava Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.guava_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await guava.findById(req.query.id) 
        res.render('guavadelete', { title: 'guava Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
