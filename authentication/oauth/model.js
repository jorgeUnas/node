let db = require('./db.js'); 

//Implement a function to pick up the confidential clients

const getClient = (clientId, clientSecret) => {
    //Extracting the confidential clients
    const confidentialClients =
        db.confidentialClients.filter((client) => {
        return client.clientId === clientId &&
        client.clientSecret === clientSecret
  });
  return confidentialClients[0];
};

// Write saveToken() function here
const saveToken = (token, client, user) => {
  
}

module.exports = {
  getClient: getClient
}