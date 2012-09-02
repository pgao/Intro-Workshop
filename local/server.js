var Serial = require('serialport'),
	express = require('express');

var app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	
var port = "/dev/ttyUSB0",
	myName = "nelson";

app.use('/', express.static(__dirname));

io.sockets.on('connection', function (socket) {
	socket.emit('welcome', {name: myName});
	
	socket.on('colorchange', function (data) {
		io.sockets.emit(data['color'],data['sign']);
	});
	/*
	socket.on('set name', function(name) {
		socket.set('name', name, function() {
			audience.push(socket);
			socket.emit('begin');
		});
	});
	
	socket.on('list audience', function (data) {
		var names = [];
		
		for (var i=0; i<audience.length; i++) {
			audience[i].get('name', function(err, name) {
				names.push(err ? "connecting..." : name);
			});
		}
		socket.emit('audience', {audience: names});
	});
	*/
});

var Port = new Serial.SerialPort(port, {
	parser: Serial.parsers.readline('\n')
});

Port.on("data", function(data) {
	io.sockets.emit("control", JSON.parse(data));
});

server.listen(8000);
