var _ = require('underscore');

/**
 * [Hoster description]
 * @param {[type]} server [description]
 */
function Hoster (server) {

}

/**
 * [attach description]
 * @param  {[type]} server [description]
 * @return {[type]}        [description]
 */
Hoster.prototype.attach = function (server) {

  // Copy listeners
  var listeners = server.listeners('request').slice(0);

  // Remove listeners, but we'll re-add them later
  server.removeAllListeners();

  server.on('request', function (req, res) {
    if (req.url.indexOf(url) === 0) {
      serveCanvasReaderJs.apply(server, req, res);
    }
    else {
      _.each(listeners, function (event) {
        event.apply(server, req, res);
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

}

/**
 * [exports description]
 * @type {[type]}
 */
module.exports = Hoster;