const fs = require('fs');

const stream = fs.createWriteStream('./out.txt');

for (let i = 0; i < 10000; i++) {
    //we write a line each time, and see what will be returned by the "write" method
    //the write method returns true when the data has been flushed into the file
    //it returns false when data is not flushed, and we will get a "drain" event once all data have been flushed
    if (!stream.write(`line ${i}\n`)) {
        console.log('not flushed yet');
    } else {
        console.log('flushed');
    }
}

stream.on('drain', function () {
    console.log('drained');
});