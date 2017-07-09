//you are requiring the Node core http module
//The call to require returns the HTTP module value, which we then assign to a variable conveniently named http.
//This variable could have been named whatever we wanted to name it;
//it simply serves the purpose of having a reference to the Node HTTP module for the code that follows.
var http = require('http');

//use this module to create an HTTP server
var server = http.createServer();

//we make the HTTP server listen to a specific TCP port
var port = 8080;
server.listen(port);

//binding a function to the server request event
//This event gets  red once the server receives a new HTTP request.
//two objects passed in as arguments: an HTTP server request and an HTTP server response.
server.on('request', function (req, res) {
    //write out an HTTP header specifying the response content type
    res.writeHead(200, {'content-type': 'text/plain'});
    //using the HTTP server response object to write out a string to the browser
    res.write('Hello World!');
    //we end the response, which is required for the HTTP protocol to end and the browser to know that the response has ended
    res.end();
});

//the server emits a listening event. By listening to that event, we can print out a message once the server is available
//server.once is a variant of the server.on method, which behaves in the same way but only cares about the first time that the event occurs
server.once('listening', function () {
    console.log('Hello World server listening on port %d', port);
});