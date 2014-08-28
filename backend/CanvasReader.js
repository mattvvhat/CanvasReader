var Hoster = require('./Hoster.js');
/**
 * [CanvasReader description]
 */
function CanvasReader (server) {
  this.hoster = new Hoster(server);
}

module.exports = CanvasReader;