var express = require('express');
var Serial = require('serialport');
var app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
app.use('/', express.static(__dirname));
io.sockets.on('connection', function (socket) {
	socket.emit('welcome', {name: myName});
});
server.listen(8000);
