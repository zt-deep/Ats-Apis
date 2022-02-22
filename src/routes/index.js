const express = require('express');
const {verify} = require('../common/middleware');
const authRoutes = require('./AuthRoutes');
const menuRoutes = require('./MenuRoutes');
const jobRoutes = require('./JobRoutes');
const candidateRoutes = require('./CandidateRoutes');

const app = express();

app.use('/auth', verify ,authRoutes);
app.use('/menu', verify, menuRoutes);
app.use('/jobs', verify, jobRoutes);
app.use('/candidate', verify, candidateRoutes);

module.exports = app;