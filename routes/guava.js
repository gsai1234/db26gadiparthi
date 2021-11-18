// var express = require("express");
// var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("guava", { title: "Search Results guava" });
// });

// module.exports = router;

var express = require("express");
const guava_controlers = require("../controllers/guava");
var router = express.Router();

/* GET restaurants */
router.get("/", guava_controlers.guava_view_all_Page);
module.exports = router;

/* GET detail guava page */ 
router.get('/detail', guava_controlers.guava_view_one_Page); 
/* GET create guava page */ 
router.get('/create', guava_controlers.guava_create_Page); 
/* GET create update page */ 
router.get('/update', guava_controlers.guava_update_Page); 
/* GET create guava page */ 
router.get('/delete', guava_controlers.guava_delete_Page);