const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const sausageTypes = ['bratwurst', 'andouille', 'chorizo', 'boudin', 'kielbasa'];

// GET request



app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`)
})