'use strict';

const mongoose = require('mongoose');
const server = require('./src/server.js');
const PORT = process.env.PORT || 3333;
const MONGODB_URI = 'mongodb://localhost:27017/mongo-db-demo';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(MONGODB_URI, options)
    .then(() => {
        server.start(PORT);
    });




// purpose of index.js is to connect to mongoDB ansd to start the server

