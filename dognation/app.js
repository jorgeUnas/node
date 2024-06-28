// Import packages
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");

// App config
app.set("trust proxy", 1);
const PORT = process.env.PORT || 4001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
// Import Passport config
require("./config/passport");

// Session Config

app.use(
  session({
    secret: "hola123",
    cookie: {
      maxAge: 1000 * 60 * 24,
      sameSite: "none",
      secure: true,
    },
    saveUninitialized: false,
    resave: false,
  })
);

// Passport Config
app.use(passport.initialize());

// Add the middleware to implement a session with passport below:
app.use(passport.session());

// Routes
app.use(require("./routes/index.routes"));

app.get("/", (req, res) => {
  const user = user || "Guest";
  res.render("home", { user });
});


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
