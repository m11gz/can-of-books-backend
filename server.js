'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// MONGOOSE
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

// Schema(if we want to interact with that model)
const Book = require('./models/books.js');
const { response } = require('express');

//add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('Mongoose is Connected');
});


// ROUTES
app.get('/books', getBooks);
app.get('/', (request, response) => {
  response.status(200).send('Welcome!');
});
app.get('/test', (request, response) => {
  response.send('test request received');
});
app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

async function getBooks(request, reponse) {
  try {
    let bookData = await Book.find();
    response.status(200).send(bookData);
  } catch(error) {
    next(error);
  }
}

//ERROR
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

// LISTEN
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
