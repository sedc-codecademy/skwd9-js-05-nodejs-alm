// const http = require('http');

// const bodyParser = require('body-parser');

const path = require('path')

// importing express
const express = require('express');

// creating application
const app = express();

// app.use(bodyParser.urlencoded( { extended: false }));

app.use(express.urlencoded({ extended: false }));

// Middleware
app.use((req, res, next) => {
    console.log('This is a middleware')
    next(); //next is enabling the app to reach following middleware
})
// use() can be used for all request types
app.get('/add-animal', (req, res, next) => {
    res.send(`<form action="/animal" method="POST">
                <input type="text" name="animalName" />
                <button type="submit">Submit</button> 
            </form>`)
})

app.post('/animal', (req, res, next) => {
    console.log('BODY:', req.body.animalName)
    res.redirect('/')
})

// Query Params
app.get('/users', (req, res, next) => {
    // console.log(req.query)
    // console.log(req.query.filterBy)
    console.log('this is users get without params')
    res.send('User')
})

// Parameters
app.get('/users/:id', (req, res, next) => {
    console.log(req.params.id);
    console.log('this is users get WITH params')
    res.send('User 1')
})

app.use('/this-is-static', express.static(path.join(__dirname, 'public')))

// The most specific endpoints should be on top
app.get('/', (req, res, next) => {
    res.send('<h1>Hello Word</h1>')
})

app.listen(3000);

// const server = http.createServer(app)
// server.listen(3000)