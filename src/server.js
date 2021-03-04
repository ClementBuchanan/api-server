'use strict';

const express = require('express');
const app = express();
const foodRoutes = require('./routes/food');
app.use(express.json());
app.use(foodRoutes);

// const notFound = require('./src/error-handlers/404.js');
// const errors = require('./src/error-handlers/500.js');
// const logger = require('./src/middleware/logger.js');

function start(port) {
    app.listen(port, () => {
        console.log(`connected to port ${port}`);
    });
}

module.exports = {
    app: app,
    start: start,
};
