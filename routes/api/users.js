const express = require("express");
const router = express.Router();
//bring in bcrypt to encrypt the password
const bcrypt = require("bcryptjs");
//bring in json web tokens
const jwt = require("jsonwebtoken");
// Bring in User model
const User = require("../../models/User");
// bring in passport
const passport = require("passport");
// bring in connection keys
const keys = require("../../config/keys");

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

// @route POST /api/users/login
// @description Login User /Returing JSON Web Token
// @access Public

router.post("/login", (req, res) => {
  // take email and password
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    email
  }).then(user => {
    if (!user) {
      res.status(403).json("No user with this email address is regsistered.");
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // if user password is matched,
        // create json web token payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // sign in
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 4200
          },
          (error, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        res.status(400).json("Incorrect password.");
      }
    });
  });
});

// @route GET /api/users/current
// Return the current user
// Private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
