var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var campgrounds = [
  {name:"Bear Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
  {name:"Morraine Hill", image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"},
  {name:"Great Big Elk Campground", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"}
]

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.render("landing")
})

app.get("/campgrounds", function(req, res){
  res.render("campgrounds", {campgrounds: campgrounds});
})

app.post("/campgrounds", function(req,res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { "name": name, "image": image }
  campgrounds.push(newCampground);
  res.redirect("campgrounds")
})

app.get("/campgrounds/new", function(req, res){
  res.render("new");
})

app.listen(3000, function(){
  console.log("Winter is coming... on port 3000.");
})
