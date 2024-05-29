const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const sausageTypes = ['bratwurst', 'andouille', 'chorizo', 'boudin', 'kielbasa'];
const buildingMaterials = {
  wood: ['plywood', '2x4s', 'cedar shingles'],
  metal: ['steel girders', 'wall studs', 'rebar'],
};

// GET request

app.get('/sausages', (req, res, next) => {
  res.send(sausageTypes)
})

app.get('/metals', (req, res, next) => {
  const arrayToSend = buildingMaterials.metal;
});

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`)
})