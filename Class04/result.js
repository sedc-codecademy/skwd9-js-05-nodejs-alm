const emitter = process.events;

// This is also step 3
emitter.on('sum-done', (result) => {
    console.log('The result is:', result);
})