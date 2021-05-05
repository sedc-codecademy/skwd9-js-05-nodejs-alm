const textService = require("../text-service");
const router = require("express").Router();
const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register endpoint
router.post("/register", async (req, res) => {
  // Validate the client data
  const schema = Joi.object({
    email: Joi.string().min(6),
    password: Joi.string().min(8),
    fullName: Joi.string().min(3),
    age: Joi.number().min(1),
    gender: Joi.string().max(1),
  });
  const validation = schema.validate(req.body);

  if (validation?.error) {
    return res.status(400).send({
      message: validation.error.details[0].message,
    });
  }

  // Check if the user already exists
  const users = textService.readUsers();
  const exists = users.some(u => u.email === req.body.email);
  if (exists) {
    return res.status(400).send({
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
router.post("/login", async (req, res) => {
  // Validation of the login data

  // Check if that user exists
  const users = textService.readUsers();
  const user = users.find(u => u.email === req.body.email);
  if (!user) {
    return res.status(404).send({
      message: `User with email: ${req.body.email} does not exist!`,
    });
  }
  // Compare the passwords
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(404).send({
      message: `Incorrect credentials!`,
    });
  }
  // Log in the user
  const token = jwt.sign({ id: user.id, creationDate: new Date() }, "this-is-a-secret");

  res.header("auth-token", token).send(token);
});

module.exports = router;
