/**
 * Canvas Reader
 * @param {[type]} id   [description]
 * @param {[type]} opts [description]
 */
function CanvasReader (el, opts) {
  opts = opts || {};
  this.fps = opts.fps || 1;
  this.duration = opts.duration || Infinity;
  this.socket_url = opts.socket_url || window.location.origin;
  // this.socket_url  = 'http://localhost:5000';
  this.socket      = io(this.socket_url);
  this.canvas_id   = typeof el === 'string' ? el : '';
  this.canvas      = document.getElementById(el);
  this.is_running  = false;
  this.frames_sent = 0;
  console.log('<3');
}

/**
 * Loop
 * @type {[type]}
 */
CanvasReader.prototype.loop = function () {
  console.log('[tick = ' + this.frames_sent + ']');
  
  var self = this;
  
  // Send an image to the server
  self.send();
  self.frames_sent++;

  var t = + new Date();

  // If recording should still be running, then repeat
  if (self.is_running && t < self.duration + self.start_time) {
    setTimeout(self.loop.bind(self), 1000.0/self.fps);
  }
  else {
    self.end();
  }
}

/**
 * Start the Loop Phase
 * @return {[type]} [description]
 */
CanvasReader.prototype.start = function () {
  this.start_time = + new Date();
  this.is_running = true;
  this.socket.emit('start', {});
  this.loop();
};

/**
 * Read DataURL from Canvas Element
 * @return {[type]} [description]
 */
CanvasReader.prototype.read = function () {
  return this.canvas.toDataURL('image/jpeg');
};

/**
 * [send description]
 * @return {[type]} [description]
 */
CanvasReader.prototype.send = function () {
  this.socket.emit('new', this.canvas.toDataURL('image/jpeg'));
}

/**
 * Close Stream and 
 * @return {[type]} [description]
 */
CanvasReader.prototype.end = function () {
  this.is_running = false;
  this.socket.emit('end', true);
  this.socket.disconnect();
}