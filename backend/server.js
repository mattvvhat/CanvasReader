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

// ...
var ffmpeg = require('fluent-ffmpeg');

// X_o
var app    = require('express')();
var server = require('http').Server(app).listen(process.env.PORT || 5000);
var colors = require('colors');

// x_^
var CanvasReader = require('./CanvasReader');
var reader       = new CanvasReader(server);

reader.on('video', function (xxx) {
  console.log('x_x'.red + ' so?');
});

/**
 * TODO: Move server.js to an *example*
 */

app.get('/', function (req, resp) {
  resp.sendFile(__dirname + '/public_files/index.html');
});

// you know we be hustling backwards
console.log('hustling backwards'.rainbow)