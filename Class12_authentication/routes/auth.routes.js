const textService = require("../text-service");
const router = require("express").Router();
const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");
const Joi = require("joi");
const bcrypt = require('bcrypt');

// Register endpoint
router.post("/register", async (req, res) => {
  // Validate the client data
  const schema = Joi.object({
    email: Joi.string().min(6),
    password: Joi.string().min(8),
    fullName: Joi.string().min(3),
    age: Joi.number().min(1),
    gender: Joi.string().max(1)
  });
  const validation = schema.validate(req.body);

  if (validation?.error) {
    res.status(400).send({
      message: validation.error.details[0].message,
    });
  }

  // Check if the user already exists
  const users = textService.readUsers();
  const exists = users.some(u => u.email === req.body.email);
  if (exists) {
    res.status(400).send({
      message: `User with an email ${req.body.email} already exists!`,
    });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new User
  const user = new User(
    uuidv4(),
    req.body.email,
    hashedPassword,
    req.body.fullName,
    req.body.age,
    req.body.gender
  );

  // Save the user to the DB
  textService.writeUser(user);

  const { password, ...cleanUser } = user;

  res.status(201).send(cleanUser);
});

// Login endpoint
router.post("/login", (req, res) => {
  res.send("Login api");
});

module.exports = router;
