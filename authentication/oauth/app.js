const express = require('express');
const path = require('path');
// Import oauth2-server here
const OAuth2Server = require('oauth2-server');

// Create a oauth instance 
const oauth = new OAuth2Server({
  model: require('./model.js'),
  allowBearerTokensInQueryString: true,
  accessTokenLifetime: 60 * 60
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 4001;

// Write authenticateRequest() here
const authenticateRequest = (req, res, next) => {
  const request = new OAuth2Server.Request(req);
  const response = new OAuth2Server.Response(res);
}

// Write obtainToken() here
const obtainToken = (req, res) => {
  const request = new OAuth2Server.Request(req);
  const response = new OAuth2Server.Response(res);
  return oauth.token(request, response)
          .then((token) => {
            res.json(token);
          }).catch((err) => {
            res.json(err);
          })
            
}

// Write '/auth' route here


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/home.html'));
})
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/login.html'));
})

app.get('/secret', (req, res)=>{
    res.send('Welcome to the secret area.');
})

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`));

