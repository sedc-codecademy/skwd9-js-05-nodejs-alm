const EventEmitter = require('events');
class CustomEmitter extends EventEmitter {}

const emitter = new CustomEmitter();

// [Basics]

// [How to listen to events]
// emitter.on('event', (arg) => {
//     console.log(arg);
//     console.log('Event fired!');
// });

// [How to emit an event]
// emitter.emit('event');

// [You can also send data]
// emitter.emit('event', {name: 'Ivan'});

// [The listener is kept open]
// setInterval(() => {
//     emitter.emit('event', new Date());
// }, 1000);

// [.on() can be chained]
// emitter.on('event', () => {
//     console.log('Event fired!');
// })
// .on('event', (arg) => {
//     console.log(arg);
// })
// .on('message', (messArg) => {
//     console.log(messArg);
// })

// emitter.emit('event', {name: 'Ivan'});
// emitter.emit('message', 'Hello from SEDC');

// ----------------------------------------------------- // 

// [Listeners]

// Predefined functions

// function messageListener (args) {

//     if (args) {
//         console.log(args);
//     }

//     console.log('Message received!');
// }
// emitter.on('message', messageListener);

// emitter.emit('message');
// emitter.emit('message', 'Hello from SEDC');

// [Multiple arguments]
// emitter.on('sum', (firstNumber, secondNumber) => {
//     console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// });
// emitter.emit('sum', 5, 16);

// [What is this?]
// If you ever need access to the emitter in the listener, use normal functions. (Not arrow functions).
// emitter.on('data', (args) => {
//     console.log(args);
//     console.log('arrow', this);
// });

// emitter.on('data', function(args) {
//     console.log(args);
//     console.log('Pre ES6', this);
// })

// emitter.emit('data', {data: 'Hello World'})
// ----------------------------------------------------- // 
// [Modular Events]
// process.events = emitter;

// // This is step 3
// emitter.on('sum-done', (result) => {
//     console.log('main-file-result', result);
// })

// const math = require('./math');
// const result = require('./result');

// // Chain starts here. Step 1.
// emitter.emit('sum', 6, 7);
// ----------------------------------------------------- // 

// [Different ways to listen to events]

emitter.on('message', (args) => {
    console.log(args);
})
.once('message', () => {
    console.log('Fires only once!');
})
// Regarding prepend. All listeners are kept in an array. With prependListener()
// you can push that listener to the top. This makes the listener fire first.
.prependListener('message', () => {
    console.log('Fires first because it was prepended!');
})
.prependOnceListener('message', () => {
    console.log('Hello from prependOnceListener!');
})

setInterval(() => {
    emitter.emit('message', new Date());
}, 1000);