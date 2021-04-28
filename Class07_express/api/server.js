const express = require("express");
const fileSystem = require("./file-system");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Get all animals
app.get("/animals", (req, res, next) => {
  let animals = JSON.parse(fileSystem.getData("animals.json"));

  if (req.query.pageSize) {
    animals = animals.slice(0, parseInt(req.query.pageSize))
  }

  if (req.query.sortBy) {
    animals.sort((a, b) => a[req.query.sortBy].localeCompare(b[req.query.sortBy]))
  }

  res.send(animals);
});

// Get animal by ID
app.get("/animals/:id", (req, res, next) => {
  const animals = JSON.parse(fileSystem.getData("animals.json"));

  const animal = animals.find(animal => animal.id === req.params.id);

  if (!animal) {
    throw new Error("Animal not found!");
  }

  res.send(animal);
});

// Edit animal by ID
app.put("/animals/:id", (req, res, next) => {
  const animal = req.body;
  const id = req.params.id;
  const updatedAnimal = fileSystem.updateData(id, animal, "animals.json");
  res.send(updatedAnimal);
});

// Creates a new animal
app.post("/animals", (req, res, next) => {
  const animal = {
    imgSrc: req.body.imgSrc,
    animalName: req.body.animalName,
    description: req.body.description,
    id: uuidv4(),
  };

  fileSystem.addData(animal, "animals.json");
  res.send(animal);
});

// Deletes an animal
app.delete("/animals/:id", (req, res, next) => {
  const id = req.params.id;
  fileSystem.deleteData(id, "animals.json");
  res.send(JSON.stringify({ deleted: true }));
});

// Get images for homepage carousel
app.get("/", (req, res, next) => {
  const carouselImages = fileSystem.getData("carousel-images.json");
  res.send(carouselImages);
});

app.listen(3000);
