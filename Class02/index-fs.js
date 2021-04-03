const fs = require('fs');

// Writing a file

// Synchronous

// console.log('Started writing...', Date.now())

// fs.writeFileSync('test.txt', 'This is a test');

// console.log('After the data has been written', Date.now())

// Asynchronous

// fs.writeFile('test.txt', 'Async test', err => {
//     if (err) throw err;
    
//     console.log('Data written to file')
// })

// console.log('After the data is written to file');

// Reading a file

// Synchronous
// const data = fs.readFileSync('test.txt');

// console.log(data)

// Asynchronous

fs.readFile('test.txt', (err, data) => {
    if (err) throw err;

    console.log(data);
})

console.log('THis is after the reading of the file')