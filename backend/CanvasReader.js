var EventEmitter = require('events').EventEmitter;
var util         = require('util');
var Hoster       = require('./Hoster.js');

// :D
util.inherits(CanvasReader, EventEmitter);

/**
 * [CanvasReader description]
 * @param {[type]} server [description]
 */
function CanvasReader (server) {
  this.hoster = new Hoster(server);
}

/**
 * EXPORT
 */

module.exports = CanvasReader;