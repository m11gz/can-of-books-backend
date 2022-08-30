'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Books = require('./models/Books.js');

async function seed() {
  // structure the same as our Cat Schema
  // name: {type: String, required: true},
  // color: {type: String, required: true},
  // spayNeuter: {type: Boolean, required: true},
  // location: {type: String, required: true}
  await Books.create({
    name: 'Sapiens',
    color: 'Black and White',
    spayNeuter: true,
    location: 'hammock'
  });
  console.log('Dot was added to the database');
  await Libro.create({
    name: 'Bible',
    color: 'Brindle',
    spayNeuter: true,
    location: 'front porch'
  });
  console.log('Ginger was added to the database');
  mongoose.disconnect();
}

seed();
