var fs = require('fs');

function decodeBase64Image (dataString) {
  // console.log(dataString);
  var matches  = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  var response = {};

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
}

fs.readFile('in.jpg', 'utf8', function (err, data) {
  // var imageBuffer = decodeBase64Image(data);
  // fs.writeFile('out.jpg', imageBuffer.data, function(err) { 1; });
});


// var stream = require('stream');
// var x = new stream.Writable();
// x.push('whatever', 'base64');


var Readable = require('stream').Readable;

var rs = new Readable();
rs.push('beep ');
rs.push('boop\n');
rs.push(null);

console.log(rs._readableState.buffr);

rs.pipe(process.stdout);

