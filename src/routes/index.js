const express = require('express');
const authRoutes = require('./AuthRoutes');

const app = express();

app.use('/auth', authRoutes);

module.exports = app;