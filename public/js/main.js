var socket = io.connect('http://localhost:4444', function (data) {
	console.log(data);
	socket.emit('my other event', {my: 'data'});
});
