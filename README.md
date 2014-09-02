# CanvasRecorder

NodeJS package to receive image data across a socket

## Warning

This is in development as of Sept. 2, 2014. Version 0.0.1 release-date on Sept. 15, 2014.

## Install

1. `npm install`
2. `bower install`
3. `grunt dev`

## Client-side

```html
<script src="/CanvasReader/CanvasReader.js"></script>
```

## Server-sider

```js
// Load server stuff and boot app (NOTE: This can be done with a plain HttpClient)
var app    = require('express')();
var server = require('http').Server(app).listen(process.env.PORT || 5000);

// Turn on the canvas reader and begin hosting CanvasReader.js to the client
var CanvasReader = require('CanvasReader');
var reader       = CanvasReader(server);

// ...
reader.on('video', function (session) {
  this.save(__dirname + 'video' + session.id + '.mp4');
});

// OR:
reader.on('video', 'output-%03d.mp4');
```

# UNLICENSE

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
