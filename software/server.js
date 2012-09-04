var express = require('express');
var app = express(),
	server = require('http').createServer(app)

app.use('/', express.static(__dirname));



server.listen(8000);
