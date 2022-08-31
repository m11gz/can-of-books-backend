const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const Book = require('./models/books.js');

async function clear() {
  try {
    await Book.deleteMany({});
    console.log('Da Book is cleared');
  } catch (err) {
    console.error(err)
  } finally {
    mongoose.disconnect ();
  }
}

clear();

