var Serial = require('serialport'),
	express = require('express'),
	rest = require('restler'),
	fs = require('fs');

var app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	
var hub = "http://localhost:8000/hub",
	port = "",
	myName = "nelson",
	audience = [];

server.listen(80);

rest.postJson(hub, {name: myName});

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

io.sockets.on('connection', function (socket) {
	socket.emit('welcome', {name: myName});
	
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
});


var Port = new Serial.SerialPort(process.argv[2], {
	parser: Serial.parsers.readline('\n')
});

Port.on("data", function(data) {
	for (var i=0; i<audience.length; i++) {
		audience[i].emit("control", JSON.parse(data));
	}
});

