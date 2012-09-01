var express = require('express'),
	fs = require('fs'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	clients = [];
	
server.listen(8000);
	
app.get('/', function(req, res) {
	fs.readFile(__dirname + '/index.html', function (err, data) {
		if (err) {
			console.log(err)
		}
		else {
			res.end(data);
		}
	});
});

app.post('/hub', function(req, res) {
	console.log(req);
	var name,
		IP;
	for (var i=0; i<clients.length; i++) {
		client[i].emit('new server', {name: name, IP: IP});
	}
});

io.sockets.on('connection', function(socket) {
	socket.emit('welcome');
	clients.push(socket);
});
