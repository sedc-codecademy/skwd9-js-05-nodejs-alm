// console.log('Hello World!');

const math = require('./math')

// console.log('SUM:', math.sum(1, 2))
// console.log('SUBTRACT: ', math.subtract(10, 5))
// console.log('DIVIDE: ', math.divide(10, 5))
// console.log('MULTIPLY: ', math.multiply(2, 2))

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.setPrompt('How old are you?>')
// rl.prompt();

// rl.on('line', age => {
//     console.log(`You are ${age} years old.`)
//     rl.close();
// }).on('close', () => {
//     console.log('Have a good day!')
//     process.exit(0);
// })

// rl.question('Where are you from?', answer => {
//     console.log(answer);
//     rl.close()
// })