const fs = require('fs');

readTest();

// writeTest();

function readTest() {
    //a read stream is an event emitter that emits readable and end events.
    const stream = fs.createReadStream(
        './1.txt',
        {
            encoding: 'utf8',
            //Readable constructor, defines the maximum number of bytes to store before pausing.
            highWaterMark: 40
        }
    );

    stream.on('readable', function () {
        let chunk;

        while (chunk = stream.read()) {
            console.log(chunk);
        }
    });

    stream.once('end', function () {
        console.log('Read file over');
    });
}

function writeTest() {
    const stream = fs.createWriteStream('./out.txt');

    for (let i = 0; i < 10; i++) {
        stream.write(`line ${i}\n`);
    }
}