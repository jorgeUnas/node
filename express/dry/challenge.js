const express = require('express');
const app = express();

// Finish this function and use it in the routes below

const sendFruitResponse = (req, res, next) => {
  res.send('fruit');
};

app.get('/whatis/apple', (req, res, next) => {
  sendFruitResponse()
});

app.get('/whatis/orange', (req, res, next) => {
  sendFruitResponse()
});

app.get('/whatis/banana', (req, res, next) => {
  sendFruitResponse()
});