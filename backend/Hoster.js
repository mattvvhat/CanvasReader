var fs = require('fs');
var _  = require('underscore');

/**
 * [Hoster description]
 * @param {[type]} server [description]
 */
function Hoster (server) {
  this.attach(server);
}

/**
 * [attach description]
 * @param  {[type]} server [description]
 * @return {[type]}        [description]
 */
Hoster.prototype.attach = function (server, opts) {
  var self = this;
  opts = opts || {};
  opts = _.defaults(opts, {
    path : '/CanvasReader/CanvasReader.js'
  });

  // Copy listeners
  var listeners = server.listeners('request').slice(0);

  // Remove listeners, but we'll re-add them later
  server.removeAllListeners('request');

  server.on('request', function (req, res) {
    if (req.url.indexOf(opts.path) === 0) {
      serveCanvasReaderJs.call(server, req, res);
    }
    else {
      _.each(listeners, function (ev) {
        ev.call(server, req, res);
      });
    }
  });


};

/**
 * [urlMatches description]
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
Hoster.prototype.urlMatches = function (url) {

};

/**
 * [serveCanvasReaderJs description]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
function serveCanvasReaderJs (req, res) {
  fs.readFile(__dirname + '/file.js', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
      res.end('err');
    }
    else
      res.end(data);
  });
  console.log(':(');
}

/**
 * [exports description]
 * @type {[type]}
 */
module.exports = Hoster;