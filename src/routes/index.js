const express = require('express');
const verify = require('../common/middleware');
const authRoutes = require('./AuthRoutes');
const menuRoutes = require('./MenuRoutes');

const app = express();

app.use('/auth', verify ,authRoutes);
app.use('/menu', verify, menuRoutes);

module.exports = app;