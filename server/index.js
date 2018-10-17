var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
http.listen(3000, () => console.log('listening on *:3000'));

io.on('connection', socket => {
  socket.on('message', msg => io.emit('message', msg));
});
