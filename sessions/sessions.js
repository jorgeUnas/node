const express = require("express");
const app = express();

// Import express-session below:
const session = require('express-session');

// Create your session middleware below:
app.use(
  session({
    secret: 'Random string',
    resave: false,
    saveUninitialized: false,
  })
);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});