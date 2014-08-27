/**
 * [CanvasReader description]
 */
function CanvasReader (server) {
  console.log(listeners);
}


// function attachServe (path) {

//   debug('attaching client serving req handler');


//   var url = '/socket.io.js';
//   var evs = srv.listeners('request').slice(0);
//   var self = this;
//   srv.removeAllListeners('request');
//   srv.on('request', function(req, res) {
//     if (0 == req.url.indexOf(url)) {
//       self.serve(req, res);
//     } else {
//       for (var i = 0; i < evs.length; i++) {
//         evs[i].call(srv, req, res);
//       }
//     }
// };

module.exports = CanvasReader;