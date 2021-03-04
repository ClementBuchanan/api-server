'use strict';

// Pull in mongoose so we can create a database schema (a.k.a bluprint for the data)
const mongoose = require('mongoose');

// Create a new mongoose schema with a set of properties and constraints
const foodSchema = mongoose.Schema({
  name: { type: String, required: true },   // This must be a string and provided (req)
  calories: { type: Number, required: true },
  type: { type: String, uppercase: true, enum: ['FRUIT', 'VEG', 'MEAT'] }  //enum means the data must be one of the enumerated values
});

// create a mongoose model ---> in the db it creates a collection
const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;



