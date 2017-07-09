const express = require("express");
const router = express.Router();


router.get('/', function(req, res){
  console.log("Home page route connected!");

  res.render("main")
})

router.post('/', function(req, res){
  console.log("Posting to home page!")

  res.render("main", {
  })
})

module.exports = router;
