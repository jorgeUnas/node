const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

const fruits = ['apple', 'tomato', 'pear'];

app.get('/fruits/:id', (req, res, next) => {
  console.log(`request to /fruits/${req.params.id}`);
  res.send(fruits[req.params.id]);
});

app.get('/fruits', (req, res, next) => {
  console.log('request to /fruits, looking good!');
  res.send(fruits);
});

app.get('/fruits', (req, res, next) => {
  console.log('request to /fruits, feeling good!');
  res.send(fruits);
});


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});