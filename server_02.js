var app = require('express')();
var http = require('http').Server(app);
// Load the Socket.IO library.
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

// Establish the WebSocket connection with the browser.
io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
