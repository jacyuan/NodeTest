const fs = require('fs');

const filePath = './1.txt';

myFileStats(filePath)
    .then((data) => {
        console.log(data);
        return myReadFile(filePath);
    })
    .then((data) =>
        console.log(data)
    );


//instead of using directly fs methods, a promise layer has been added
//this allows us to use methods with a promise then way
function myFileStats(filePath) {
    return new Promise(function (resolve, reject) {
        fs.stat(filePath, function (err, stats) {
            return err ? reject(err) : resolve(stats);
        });
    });
}

//a simple read file fonction with its callback function
function myReadFile(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, 'utf8', function (err, content) {
            return err ? reject(err) : resolve(content);
        });
    });
}