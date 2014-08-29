var fs = require('fs');

var CanvasReader      = require('./CanvasReader');
var decodeBase64Image = require('./decodeBase64Image');

// X_o
var app    = require('express')();
var server = require('http').Server(app).listen(process.env.PORT || 5000);
var colors = require('colors');

// x_^
var reader = CanvasReader(server);
var io     = require('socket.io')(server);




io.on('connection', function (socket) {
  // var buffer = new Buffer();
  // var command = ffmpeg({ 
  // fs.
  var count = 0;
  socket.on('my other event', function (data) {
    var decoded = decodeBase64Image(data);
    fs.writeFile(__dirname + '/image/image-' + count + '.jpg', decoded.data, function () {
      console.log('image =', count);
      count++;
    });
  });
});

// O_o
app.get('/', function (req, resp) {
  resp.sendFile(__dirname + '/index.html');
});

console.log('hustling backwards'.rainbow)

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
