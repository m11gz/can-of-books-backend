'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Book = require('./models/books.js');

async function seed() {
  await Book.create({
    title: 'Book 1',
    description: 'A book',
    status: 'In-Stock!'
  });

  console.log('Book 1 ccreated');

  await Book.create({
    title: 'Book 2',
    description: 'A book',
    status: 'Out of Stock!'
  });

  console.log('Book 1 ccreated');

  await Book.create({
    title: 'Book 3',
    description: 'A book',
    status: 'In-Stock!'
  });
  
  console.log('Book 1 ccreated');

  mongoose.disconnect();
}

seed();
