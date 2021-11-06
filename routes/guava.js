var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("guava", { title: "Search Results guava" });
});

module.exports = router;
