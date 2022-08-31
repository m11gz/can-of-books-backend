'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

// MONGOOSE
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

// Schema(if we want to interact with that model)
const Book = require('./models/books.js');
const { request } = require('express');

// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('Mongoose is Connected');
});

// ROUTES
app.get('/books', getBooks);
app.post('/books', postBooks);
app.delete('/books/:id', deleteBooks);

app.get('/', (request, response) => {
  response.status(200).send('Welcome!');
});
app.get('/test', (request, response) => {
  response.send('test request received');
});
app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

async function getBooks(req, res, next) {
  try {
    const bookData = await Book.find();
    res.status(200).send(bookData);
  } catch (error) {
    next(error);
  }
}

async function postBooks(req, res, next) {
  console.log(req.body);
  try {
    let createBook = await Book.create(req.body);
    res.status(200).send(createBook);
  } catch (err) {
    next(err);
  }
}
async function deleteBooks(req, res, next) {
  console.log(req.params.id);
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).send('Delete book');
  } catch (err) {
    next(err);
  }
}
//ERROR
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

// LISTEN
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
