const emitter = process.events;

// This is step 2
emitter.on('sum', (f, s) => {
    emitter.emit('sum-done', sum(f, s));
})

function sum (first, second) {
    return `${first} + ${second} = ${first + second}`;
}