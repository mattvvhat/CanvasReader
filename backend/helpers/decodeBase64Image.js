/**
 * Decoded
 * @param  {[type]} dataString [description]
 * @return {[type]}            [description]
 */
function decodeBase64Image (dataString) {
  var matches  = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  var response = {};

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  // response.data = new Buffer(matches[2], 'base64');
  response.data = matches[2];

  return response;
}

module.exports = decodeBase64Image;