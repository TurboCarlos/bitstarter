var fs = require('fs');
var express = require('express');

//Get site contents

var page = 'index.html';

var content = function(page) { 
	return fs.readFile(page, function (err, data) {
		if (err) throw err;
		var buf = new Buffer(data)
		buf.toString("utf8",0,buf.length);
	});
};

//Output to server
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
