const http = require('http');

const urls = [
    'http://jsonplaceholder.typicode.com/posts/1',
    'http://jsonplaceholder.typicode.com/posts/2'
];

run();

function run() {
    urls.forEach((url) => {
        http.get(url, collectResponse);
    });
}

let allResults = [];
let responded = 0;

function collectResponse(res) {
    let responseBody = '';
    //important to set the encode for interpreter incoming data
    res.setEncoding('utf8');

    // collect the response body
    res.on('data', function (d) {
        responseBody += d;
    });

    // when the response ends, we should have all the response body
    res.on('end', function () {
        let response = JSON.parse(responseBody);
        allResults = allResults.concat(response);
        responded += 1;
        /// check if we have responses to all requests
        if (responded == urls.length) {
            console.log('All responses ended. Number of total results:', allResults.length);
            console.log(allResults);
        }
    });
}