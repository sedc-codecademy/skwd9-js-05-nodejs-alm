const express = require('express');
const fileSystem = require('./file-system');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors())
app.use(express.json())

app.use('/', (req, res, next) => {
    const carouselImages = fileSystem.getData();
    res.send(carouselImages)
})


app.listen(3000)