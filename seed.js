'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Book = require('./models/books.js');

async function seed() {
  await Book.create({
    title: 'The Great Gatsby',
    description: 'A book based on the prosperity of the American society after World War I',
    status: 'By: F. Scott Fitzgerald'
  });

  console.log('Book 1 created');

  await Book.create({
    title: 'Moby Dick',
    description: 'Labeled as one of the greatest novels in American literature, the story of Captain Ahab on his journey to find the white whale Moby Dick',
    status: 'By: Herman Melville'
  });

  console.log('Book 2 created');

  await Book.create({
    title: 'Hamlet',
    description: 'A timeless classic, taking place around 1599-1601, about the tragedy of Hamlet the Prince of Denmark',
    status: 'By: William Shakespeare'
  });

  console.log('Book 3 created');

  mongoose.disconnect();
}

seed();
