var EventEmitter = require('events').EventEmitter;
var util         = require('util');
var CanvasHoster = require('./CanvasHoster.js');
var CanvasSocket = require('./CanvasSocket.js');

// :D
util.inherits(CanvasReader, EventEmitter);

/**
 * [CanvasReader description]
 * @param {[type]} server [description]
 */
function CanvasReader (server, opts) {
  EventEmitter.call(this);
  opts = opts || {};
  this.hoster = new CanvasHoster(server, opts);
  this.socket = new CanvasSocket();
}

/**
 * EXPORT
 */

module.exports = CanvasReader;