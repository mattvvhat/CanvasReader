var stream = require('stream');
var util   = require('util');

util.inherits(ImageStream, stream.Readable);

function ImageStream (opts) {
  stream.Readable.call(this, opts);
}

ImageStream.prototype.push = function (data) {
};

ImageStream.prototype._read = function () {
};
