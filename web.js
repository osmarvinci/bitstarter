var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
//Get info form index.html
var home = fs.readFileSync("teste2.html", "utf-8");

app.get('/', function(request, response) {
  response.send(home);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
