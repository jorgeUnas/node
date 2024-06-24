const express = require("express");
const app = express();
// Import the passport library below:
const passport = require("passport");
// Import the passport-local library below:
const LocalStrategy = require("passport-local").Strategy;



const session = require("express-session");
const PORT = process.env.PORT || 5000;

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Add the middleware to initialize the passport library below:

app.use(passport.initialize());

// Add the middleware to implement a session with passport below:
app.use(passport.session());


// Complete the serializeUser function below:
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Complete the deserializeUser function below:
passport.deserializeUser((id, done) => {
    db.users.findById(id, function(err, user){
        if(err) return done(err); 
        done(null, user);
    })
});

// Add your passport local strategy below:

passport.use(
  new LocalStrategy(function (username, password, done) {

    db.users.findByUsername(username, (err, user) => {
       if(err) return done(err);
       if(!user) return done(null, false);
       if(user.password != password) return done(null, false);
       return done(null, user);
    });
  })
);


app.get("/", (req, res) => {
  res.send("Hello from the homepage!");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", (req, res) => {
  // Pass user object stored in session to the view page:
  res.render("profile", { user: req.user });
});

// Add the passport middleware below:
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect : "/login"}),
  (req, res) => {
    res.redirect("profile");
  }
);

// POST REGISTER:
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  // Create new user:
  const newUser = await db.users.createUser({username, password}); 

  // Add if/else statement with the new user as the condition:
  if (newUser) {
    // Send correct response if new user is created:
    res.status(201).json({
      msg: "New user created!",
      newUser
    });
  } else {
    // Send correct response if new user failed to be created:
    res.status(500).json({
      msg: "Unable to create user!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
