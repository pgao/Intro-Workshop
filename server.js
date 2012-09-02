var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(8000);
console.log('test');
var oneSocket = null
function handler (req, res) {
    console.log(req.url);
  if (req.url == '/') {
      console.log("IM NOW HERE");
      file = '/view.html'
  } else { 
      console.log("IM HERE");
      file = '/control.html'
  } 
  function loadData(err,data) {
    res.end(data) 
  }
  fs.readFile(__dirname + file,loadData);
  io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('colorchange', function (data) {
      io.sockets.emit(data['color'],data['sign']);
  });
  });
}

