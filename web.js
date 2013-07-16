var express = require('express');
var app = express.createServer(express.logger());

//Get site contents
var buf = fs.readFileSync('index.html');
var content = buf.toString("utf8",0,buf.length);

//Output to server
app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
