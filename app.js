var express = require("express");
var app = express();
var campgrounds = [
  {name:"Bear Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
  {name:"Morraine Hill", image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"},
  {name:"Great Big Elk Campground", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"}
]

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing")
})

app.get("/campgrounds", function(req, res){
  res.render("campgrounds", {campgrounds: campgrounds});
})

app.listen(3000, function(){
  console.log("Winter is coming... on port 3000.")
})
