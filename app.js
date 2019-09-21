const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const passport = require('passport')

// Initialze app
const app = express();

// using bodyParser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// establish database conenction
const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(res => {
    console.log("Database connected successfully!");
  })
  .catch(error => {
    console.log(error);
  });

// Use Route
app.use("/api/users", users);

//Adding passport middleware
app.use(passport.initialize());

//Passport Config strategy eg: Local strategy, google stragtegy, JWT strategy etc
require("./config/passport")(passport);

const port = process.env.PORT || 4002;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
