const express = require('express');
const appleRouter = express.Router();

const apples = {
  mcintosh: {
    description: 'Classic, juicy, bright',
    priceRange: 'medium',
    color: 'green and red'
  },
  honeycrisp: {
    description: 'Crisp, sweet!',
    priceRange: 'pricey',
    color: 'red and yellow'
  },
  goldenDelicious: {
    description: 'rich, custardy',
    priceRange: 'cheap',
    color: 'yellow'
  }
}

// Finish the appleRouter.param call:

appleRouter.param('variety');

// Refactor the routes below to utilize your middleware:

appleRouter.get('/:variety/description', (req, res, next) => {
  const variety = req.params.variety;
  if (apples[variety]) {
    res.send(apples[variety].description);
  } else {
    res.status(404).send();
  }
});

appleRouter.get('/:variety/price-range', (req, res, next) => {
  const variety = req.params.variety;
  if (apples[variety]) {
    res.send(apples[variety].priceRange);
  } else {
    res.status(404).send();
  }
});

appleRouter.get('/:variety/color', (req, res, next) => {
  const variety = req.params.variety;
  if (apples[variety]) {
    res.send(apples[variety].color);
  } else {
    res.status(404).send();
  }
});