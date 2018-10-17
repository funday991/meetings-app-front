var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/api', (req, res) => res.sendFile('../App.js'));

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('message', msg => io.emit('message', msg));
});

http.listen(3000, '192.168.1.7', () => console.log('listening on *:3000'));
