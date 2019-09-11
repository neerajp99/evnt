const express = require("express");
const router = express.Router();
//bring in bcrypt to encrypt the password
const bcrypt = require("bcryptjs");
//bring in json web tokens
const jwt = require("jsonwebtoken");
// Bring in User model
const User = require("../../models/User");

// @route POST /api/users/register
// @description Reister New User
// @access Public

router.post("/register", (req, res) => {
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      res.status(400).json("User with this email address already exists.");
    } else {
      // if user does not exist, create an objet with new user credenials
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // hashing tha password by generating a salt
      bcrypt.genSalt(10, (error, salt) => {
        // passing in the salt value to generate the hash
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if (error) {
            throw error;
          } else {
            // Initializing the hash as the db password
            newUser.password = hash;
            // saving the user credentials to the database
            newUser
              .save()
              .then(user => {
                res.json(user);
              })
              .catch(error => {
                console.log(error);
              });
          }
        });
      });
    }
  });
});

module.exports = router;
