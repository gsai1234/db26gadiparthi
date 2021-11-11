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