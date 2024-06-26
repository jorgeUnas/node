const bcrypt = require("bcrypt");

// Create password hashing function below:

const passwordHash = async (password, saltRounds) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds); 
  }
  catch(err){

  }
};