/**
 * Canvas Reader
 * @param {[type]} id   [description]
 * @param {[type]} opts [description]
 */
function CanvasReader (el, opts) {
  opts = opts || {};
  this.fps = opts.fps || 33;
  this.socket_url = opts.socket_url || window.location.origin;
  this.socket     = io(this.socket_url);
  this.canvas_id  = typeof el === 'string' ? el : '';
  this.canvas     = document.getElementById(el);
  this.is_running = false;
}

/**
 * Loop
 * @type {[type]}
 */
CanvasReader.prototype.loop = functino () {
  if (this.is_running) {
    this.send.call(this);
    setTimeout(this.loop, 1.0/this.fps);
  }
}

/**
 * [start description]
 * @return {[type]} [description]
 */
CanvasReader.prototype.start = function () {
  this.is_running = true;
  this.socket.emit('start', this);
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
  this.socket.emit('image', this.read());
}

/**
 * Close Stream and 
 * @return {[type]} [description]
 */
CanvasReader.prototype.end = function () {
  this.socket.emit('end', true);
  this.socket.disconnect();
}