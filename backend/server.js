var CanvasReader = require('./CanvasReader');

//
var app    = require('express')();
var server = require('http').Server(app).listen(process.env.PORT || 5000);
var colors = require('colors');

//
var reader = CanvasReader(server);
var io     = require('socket.io')(server);

app.get('/', function (req, resp) {
  resp.end(':(');
});

// io.on('connection', function (socket) {
  
//   var key = Math.random();

//   // After opening a connection, make sure all follow-up connections come from a key
//   // Note this only work with a single process...
//   socket.emit('verify', { key : key });

//   // Transferring an image from client to server
//   socket.on('send-image', function (data) {
//     console.log(data);
//   });
// });