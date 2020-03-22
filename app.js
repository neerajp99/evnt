const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const passport = require("passport");
const profile = require("./routes/api/profile");
const avatar = require("./routes/api/avatar");
const talk = require("./routes/api/talk");
const event = require("./routes/api/event");
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
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch(error => {
    console.log(error);
  });

// Use Route
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/avatar", avatar);
app.use("/api/talk",talk);
app.use("/api/event",event);

//Adding passport middleware
app.use(passport.initialize());

//Passport Config strategy eg: Local strategy, google stragtegy, JWT strategy etc
require("./config/passport")(passport);

const port = process.env.PORT || 4002;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
