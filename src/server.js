'use strict';

const express = require('express');
const app = express();
const foodRoutes = require('./routes/food');
const clothesRoutes = require('./routes/clothes');
app.use(express.json());
app.use(foodRoutes);
app.use(clothesRoutes);

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
