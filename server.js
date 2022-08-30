'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

// MONGOOSE
const mongoose = require('mongoose');

// Schema(if we want to interact with that model)
const Book = require('./models/books.js');

//add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('Mongoose is Connected');
});

mongoose.connect(process.env.DB_URL);

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// ROUTES
app.get('/', (request, response) => {
  response.status(200).send('Welcome!');
});

app.get('/test', (request, response) => {
  response.send('test request received');
});


app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

//ERROR
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

// LISTEN
app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
