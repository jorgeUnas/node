const express = require('express');
const app = express();
const { seedElements } = require('./utils');


// Serves Express Yourself website
app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const expressions = [];
seedElements(expressions, 'expressions');

// Get all expressions
app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});