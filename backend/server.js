// ffmpeg -r 43.00 -f image2pipe -c:v mjpeg -i - output.mpg
// cat big.jpg | ffmpeg -r 62.5 -f image2pipe -c:v mjpeg -i - output.mpg
// cat *.jpg | ffmpeg -f image2pipe -c:v mjpeg -i - output.mpg
// cat *.jpg | ffmpeg -f image2pipe -c:v mjpeg -i - output.mpg
// cat *.jpg | ffmpeg -f image2pipe -c:v mjpeg -i - output.mpg
// cat *.jpg | ffmpeg -f image2pipe -c:v mjpeg -i - output.mpg
// cat *.jpg | ffmpeg -f image2pipe -c:v mjpeg -i - output.mpg
// cat *.jpg | ffmpeg -f image2pipe -c:v mjpeg -i - output.mpg
// cat *.jpg | ffmpeg -f image2pipe -c:v mjpeg -i - output.mpg
// cat *.jpg | ffmpeg -f image2pipe -c:v mjpeg -i - output.mpg
// cat *.jpg | ffmpeg -f image2pipe -c:v mjpeg -i - output.mpg
// cat *.jpg | ffmpeg -f image2pipe -c:v mjpeg -i - output.mpg
// cat *.jpg | ffmpeg -f image2pipe -c:v mjpeg -i - output.mpg
// cat *.jpg | ffmpeg -f image2pipe -c:v mjpeg -i - output.mpg

var fs     = require('fs');
var stream = require('stream');

var ffmpeg = require('fluent-ffmpeg');

var CanvasReader      = require('./CanvasReader');
var decodeBase64Image = require('./decodeBase64Image');

// X_o
var app    = require('express')();
var server = require('http').Server(app).listen(process.env.PORT || 5000);
var colors = require('colors');

// x_^
var reader = CanvasReader(server);
var io     = require('socket.io')(server);


/**
 *
 *
 *
 * 
 */


io.on('connection', function (socket) {
  // var buffer = new Buffer();
  // var command = ffmpeg({ 
  // fs.
  
  var block_name  = __dirname + '/tmp/BLOCK';
  var mp4_name    = __dirname + '/out.mp4';

  var blockStream = fs.createWriteStream(block_name);

  socket.on('connect', function () {
  });

  socket.on('new', function (data) {
    var decoded = decodeBase64Image(data);
    blockStream.write(decoded.data, 'base64');
  });

  socket.on('end', function () {
    blockStream.end();
    console.log('starting encoding');
    // var read_stream = fs.createReadStream(block_name);
    // var command = ffmpeg(read_stream);
    // command.videoCodec('libx264');
    // command.fps(62.5);
    // command.save(mp4_name);
    // command.on('end', function () {
    //   console.log('Done encoding');
    // });
  });

  socket.on('disconnect', function () {
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
