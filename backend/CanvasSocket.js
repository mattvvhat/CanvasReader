var socket_io = require('socket.io');


/**
 * socket.io Wrapper to Catch Input
 * @param {[type]} server [description]
 * @param {[type]} opts   [description]
 */
function CanvasSocket (server, opts) {
  var io = socket_io(server);
  io.on('connection', function (socket) {
    var block_name  = __dirname + '/tmp/BLOCK';
    var mp4_name    = __dirname + '/out.mp4';

    var blockStream = fs.createWriteStream(block_name);

    socket.on('start', function () {
      console.log('> new started');
    });

    socket.on('new', function (data) {
      console.log('> new image sent');
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
}



/**
 * EXPORT
 */

module.exports = CanvasSocket;