var server = require('http').createServer(handler)
  , io = require('socket.io').listen(server)
  , fs = require('fs')

server.listen(8001);

function handler (req, res) {
    fs.readFile(__dirname + '/view.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading view.html');
            }
            res.writeHead(200);
            res.end(data);
        }
    );
}

var SerialPort  = require('serialport2').SerialPort;
var portName = '/dev/tty.usbserial-A900GCAB';

var sp = new SerialPort(); // instantiate the serial port.
sp.open(portName, { // portName is instatiated to be COM3, replace as necessary
   baudRate: 9600, // this is synced to what was set for the Arduino Code
   dataBits: 8, // this is the default for Arduino serial communication
   parity: 'none', // this is the default for Arduino serial communication
   stopBits: 1, // this is the default for Arduino serial communication
   flowControl: false // this is the default for Arduino serial communication
});

var cleanData = ''; // this stores the clean data
var readData = '';  // this stores the buffer
sp.on('data', function (data) { // call back when data is received
    readData += data.toString(); // append data to buffer
    // if the letters 'A' and 'B' are found on the buffer then isolate what's in the middle
    // as clean data. Then clear the buffer. 
    if (readData.indexOf('B') >= 0 && readData.indexOf('A') >= 0) {
        cleanData = readData.substring(readData.indexOf('A') + 1, readData.indexOf('B'));
        readData = '';
        io.sockets.on('connection', function (socket) {
          socket.on('event', function() {
            console.log("blabla");
          });
          io.sockets.emit('message', cleanData);
        });
        console.log(cleanData);
    }
});

