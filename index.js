'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server.js');
const PORT = process.env.PORT || 3333;
const MONGODB_URI = process.env.MONGODB_URI;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(MONGODB_URI, options)
    .then(() => {
        server.start(PORT);
    });




// purpose of index.js is to connect to mongoDB ansd to start the server

