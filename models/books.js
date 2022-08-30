'use strict';

// bring in mongoose:
const mongoose = require('mongoose');

// extract thhe schema property from the mongoose object
const { Schema } = mongoose;

// create a cat schema, define how our object will be structured
const BookSchema = new Schema({
  name: {type: String, required: true},
  genre: {type: String, required: true},
  status: {type: Boolean, required: true},
  location: {type: String, required: true}
});

// define the model
// it gives mongoose functionality and a predefined schema to shape our data
// it takes in a string and a scheme
const CatModel = mongoose.model('Book', BookSchema);

module.exports = CatModel;
