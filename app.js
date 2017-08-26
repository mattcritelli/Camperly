var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Future landing page...")
})

app.listen(3000, function(){
  console.log("Winter is coming... on port 3000.")
})
