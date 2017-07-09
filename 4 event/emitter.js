const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();

let counter = 0;

// a listener for a specific event, but we unregister the listener in the 8th round
emitter.on('myEvent', function (data) {
    if (counter < 8) {
        console.log(`An incoming event : ${data}`);
    } else {
        unregistrerListener();
    }
});

emitter.once('myEvent', function () {
    console.log('this listener will fire only once');
});


//broadcast
for (counter = 0; counter < 10; counter++) {
    emitter.emit('myEvent', `hello num ${counter}`);
}

function unregistrerListener() {
    emitter.removeListener('myEvent', () => {
    });
}