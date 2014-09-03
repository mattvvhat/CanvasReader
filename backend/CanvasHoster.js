var fs = require('fs');
var _  = require('underscore');

/**
 * [CanvasHoster description]
 * @param {[type]} server [description]
 */
function CanvasHoster (server, opts) {
  this.attach(server, opts);
}

/**
 * Attach a Route to a Server
 * @param  {!HttpServer} server    Server object with "request" listeners
 * @return undefined     undefined 
 */
CanvasHoster.prototype.attach = function (server, opts) {
  var self = this;

  opts = opts || {};

  opts = _.defaults(opts, {
    path : '/CanvasReader/CanvasReader.js'
  });

  // Copy listeners
  var listeners = server.listeners('request').slice(0);

  // Remove listeners, but we'll re-add them later
  server.removeAllListeners('request');

  // Add a listener that catches the browser looking for our CanvasReader path
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
CanvasHoster.prototype.urlMatches = function (url) {
  return url.indexOf(this.path) === 0;
};

/**
 * Serve CanvasReader.js to the Clientside
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
function serveCanvasReaderJs (req, res) {
  fs.readFile(__dirname + '/file.js', 'utf8', function (err, data) {
    if (err)
      res.end('console.log("is it french fry time yet?");');
    else {
      res.writeHead(200, { 'Content-Type' : 'text/javascript' });
      res.end(data);
    }
  });
}

/**
 * Export CanvasHoster Class
 * @type {!CanvasHoster}
 */
module.exports = CanvasHoster;