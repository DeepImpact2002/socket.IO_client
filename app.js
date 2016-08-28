var client = require('socket.io-client');
var socket = client.connect('http://localhost:5000');

console.log('connection is established');

socket.on('emit_from_server', function(data) {
    console.log(data);
});
setTimeout(function() {
    console.log("began to emit");
    var msg = 'hohohoho'
    // the second parameter cannot be anonymous function
    // wanna know why and the solution
    socket.emit('emit_from_client', msg);
    console.log("emit completed");
}, 1000);
