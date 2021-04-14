const express = require('express');
const fileSystem = require('./file-system');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res, next) => {
    const carouselImages = fileSystem.getData('carousel-images.json');
    res.send(carouselImages)
})

app.get('/animals', (req, res, next) => {
    const animals = fileSystem.getData('animals.json')   
    res.send(animals)
})

app.post('/animals', (req, res, next) => {
    console.log(req.body)

    res.send('ok')
})

app.listen(3000)