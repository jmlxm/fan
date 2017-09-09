var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'static')));

app.use(function(req,res){
	res.sendFile(__dirname + '/static/index.html');
});

var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection',function(socket){
	socket.emit('connected');
});

console.log('TechNode is on port' +　port + '!');

