const express = require('express');
const app = express();
const user_routes = require('./routes/user.routes');
const products_routes = require('./routes/products.routes');

app.use(express.json())

app.use('/api', [user_routes, products_routes]);

module.exports = app;