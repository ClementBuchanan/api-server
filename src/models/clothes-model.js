'use strict';

// Pull in mongoose so we can create a database schema (a.k.a bluprint for the data)
const mongoose = require('mongoose');

// Create a new mongoose schema with a set of properties and constraints
const clothesSchema = mongoose.Schema({
    brand: { type: String, required: true },   // This must be a string and provided (req)
    color: { type: String, required: true },
    type: { type: String, uppercase: true, enum: ['SHIRT', 'PANTS', 'SHORTS'] }  //enum means the data must be one of the enumerated values
});

// create a mongoose model ---> in the db it creates a collection
const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;



