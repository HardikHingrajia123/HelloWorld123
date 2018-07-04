
var io = require('socket.io').listen(server);

// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
    console.log('A client is connected!'); 
    
    socket.on('message', function (message) {
            console.log('Arrival data is : ' + message );
            socket.emit('message', 'Server send this data  ' + message );
    }); 
     socket.on('login', function (message) {
            console.log('Arrival data is : ' + message );
            socket.emit('message', 'Server send this data  ' + message );
    }); 
    socket.on('disconnect', function (message) {
        setTimeout(function () {
         console.log(' A client is disconnected ' + message);
    }, 100);
    });
});
server.listen(3131); 
