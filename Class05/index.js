// const http = require('http');

// importing express
const express = require('express');

// creating application
const app = express();

app.use((req, res, next) => {
    console.log('This is a middleware')
    next();
})

app.use('/add-animal', (req, res, next) => {
    res.send(`<form action="" method="">
                <input type="text" name="" />
                <button type="submit">Submit</button> 
            </form>`)
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello Word</h1>')
})



app.listen(3000);

// const server = http.createServer(app)
// server.listen(3000)