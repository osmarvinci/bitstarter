var async   = require('async')
  , express = require('express')
  , fs      = require('fs')
  , http    = require('http')
  , https   = require('https');

var app = express();
//app.set('public',__dirname + '/public');
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + "/public"));

app.configure(function() {
  console.log("Configuring");
  app.use(express.bodyParser());
});

var home = fs.readFileSync("index.html", "utf-8");

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

app.get('/', function(request, response) {
  var data = fs.readFileSync('index.html').toString();
  response.send(home);

});

//URL e-mail
app.post('/email',function(request,response){

console.log(request.body.email);
fs.appendFile('contacts.txt', request.body.email + '\n', function (err) {
});
response.send(request.body.email);

});
