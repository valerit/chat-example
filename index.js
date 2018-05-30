var app = require('express')();
var http = require('http').Server(app);

var server = require('express')();
var serverHttp = require('http').Server(server);

var io = require('socket.io')(http, { transports: ['websocket']});
var port = process.env.PORT || 3000;
var serverPort = 3001;

server.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

serverHttp.listen(serverPort, () => {
	console.info('Listening...')
})
