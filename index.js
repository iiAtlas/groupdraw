var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html');
});

app.set('port', (process.env.PORT || 5000));

io.on('connection', function(socket) {
	console.log('user connected');

	socket.on('disconnect', function() {
		console.log('user disconnected');
	});
});

http.listen(app.get('port'), function() {
	console.log("listening on :" + app.get('port'));
});