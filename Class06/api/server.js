const express = require('express');
const fileSystem = require('./file-system');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

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
    const animal = {
        imgSrc: req.body.imgSrc,
        animalName: req.body.animalName,
        description: req.body.description,
        id: uuidv4() 
    }

    fileSystem.addData(animal, 'animals.json')
    res.send(animal)
})

app.delete('/animals/:id', (req, res, next) => {
    const id = req.params.id;
    fileSystem.deleteData(id, 'animals.json')
    res.send(JSON.stringify({ deleted: true }))
})

app.listen(3000)