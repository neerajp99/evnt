const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const avatar = require("./routes/api/avatar");
const events = require("./routes/api/events");
const ownerUsers = require("./routes/api/ownerUsers");
const ownerProfile = require("./routes/api/ownerProfile");

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
    console.log("Admin Database connected successfully!");
  })
  .catch(error => {
    console.log(error);
  });

// Use Route
app.use("/api/avatar", avatar);
app.use("/api/events", events);
app.use("/api/ownerUsers", ownerUsers);
app.use("/api/ownerProfile", ownerProfile);

//Adding passport middleware
app.use(passport.initialize());

//Passport Config strategy eg: Local strategy, google stragtegy, JWT strategy etc
require("./config/passport")(passport);

const port = process.env.PORT || 4005;
const server = app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

// Initialise socket instance
const io = require("socket.io")(server);

// Listen whenever client connects
io.on("connection", socket => {
  console.log("User connected!");

  socket.on("disconnect", () => {
    console.log("User left!");
  });
});
