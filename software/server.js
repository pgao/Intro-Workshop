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
});

var Port = new Serial.SerialPort(port, {
	parser: Serial.parsers.readline('\n')
});

Port.on("data", function(data) {
    if (!isNaN(data)) {
        var value = parseInt(data);
	    io.sockets.emit("red", value);
    };
});

server.listen(8000);
