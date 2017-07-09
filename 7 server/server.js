const net = require('net');

const server = net.createServer();
const port = 8800;

//server listens to 'connection' event
server.on('connection', function (stream) {
    //each time we got a connection,
    //we set the stream encoding to utf8
    stream.setEncoding('utf8');

    console.log('got a new stream');

    //then, each time we got a readable from the stream, we print the contents
    stream.on('readable', function () {
        let buf;
        while (buf = stream.read()) {
            console.log(`got data : ${buf}`);
        }
    });

    stream.on('end', function () {
        console.log('stream closed');
    });
});

server.once('listening', function () {
    console.log('server on line listening on port %d', port);
});

server.listen(port);

//we can use a terminal to connect to the current 8800 server
//use nc command for sending message
//nc localhost 8800       for connection