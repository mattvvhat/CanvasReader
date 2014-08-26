var app    = require('express')();
var server = require('http').Server(app);
var io     = require('socket.io')(server);
var colors = require('colors');

console.log('server on'.rainbow);

server.listen(process.env.PORT || 5000);

app.get('/', function (req, resp) {
  resp.end(':(');
});

io.on('connection', function (socket) {
  
  var key = Math.random();

  // After opening a connection, make sure all follow-up connections come from a key
  // Note this only work with a single process...
  socket.emit('verify', { key : key });

  // Transferring an image from client to server
  socket.on('send-image', function (data) {
    console.log(data);
  });
});