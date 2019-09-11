const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const users = require("./routes/api/users");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

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

const port = process.env.PORT || 4002;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
