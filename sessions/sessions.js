const express = require("express");
const app = express();

// Import express-session below:
const session = require('express-session');

// Create your store below:
 const store = new session.MemoryStore();
 
 // Create your session middleware below:

app.use(
  session({
    secret: "D53gxl41G",
    resave: false,
    saveUninitialized: false,
    store
  })
);


const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});