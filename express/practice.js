const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

// Arrays

const sausageTypes = ['bratwurst', 'andouille', 'chorizo', 'boudin', 'kielbasa'];

const buildingMaterials = {
  wood: ['plywood', '2x4s', 'cedar shingles'],
  metal: ['steel girders', 'wall studs', 'rebar'],
};

const battlefields = {
  fortSumter: {
    state: 'SC',
  },
  manassas: {
    state: 'VA',
  },
  gettysburg: {
    state: 'PA',
  },
  antietam: {
    state: 'MD',
  }
}

const currencies = {
  diram: {
    countries: ['UAE', 'Morocco'],
  },
  real: {
    countries: ['Brazil'],
  },
  dinar: {
    countries: ['Algeria', 'Bahrain', 'Jordan', 'Kuwait'],
  },
  vatu: {
    countries: ['Vanuatu'],
  },
  shilling: {
    countries: ['Tanzania', 'Uganda', 'Somalia', 'Kenya'],
  },
};

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];

const puddingFlavors = ['chocolate', 'banana', 'butterscotch', 'pistachio'];

// Some methods for puddingFlavors array 

const findPuddingIndex = (name) => {
  return puddingFlavors.indexOf(name);
}

const deletePuddingAtIndex = (index) => {
  puddingFlavors.splice(index, 1);
}

// GET requests

app.get('/sausages', (req, res, next) => {
  res.send(sausageTypes)
})

app.get('/metals', (req, res, next) => {
  const arrayToSend = buildingMaterials.metal;
  res.send(arrayToSend)
});

app.get('/battlefields/:name', (req, res, next) => {
  const battlefieldName = req.params.name;
  const battlefield = battlefields[battlefieldName];
  if(battlefield){
    res.send(battlefield)
  }else{
    res.status(404).send('')
  }
});


// Put request

app.put('/currencies/:name/countries', (req, res, next) => {
  const currencyName = req.params.name;
  const countries = req.query;
  currencies[currencyName] = countries;
  res.send(currencies[currencyName]);
});


// POST requests

app.post('/soups', (req, res, next) => {
  const newSoup = req.query.name
  soups.push(newSoup);
  res.status(201).send(newSoup);
})

//DELETE request



//Start the app

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`)
})