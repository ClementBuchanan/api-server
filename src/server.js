'use strict';

const express = require('express');
const app = express();
const foodRoutes = require('./routes/food');
app.use(express.json());
app.use(foodRoutes);

const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

function start(port) {
    app.listen(port, () => {
        console.log(`connected to port ${port}`);
    });
}

module.exports = {
    app: app,
    start: start,
};
