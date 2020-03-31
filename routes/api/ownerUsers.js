const express = require("express");
const router = express.Router();
// Bring in Owner's user model
const OwnerUser = require("../../models/OwnerUser");
//Bring in bcrypt to encrypt the password
const bcrypt = require("bcryptjs");
//Bring in json web tokens
const jwt = require("jsonwebtoken");
// Bring in passport
const passport = require("passport");
// Bring in connection keys
const keys = require("../../config/keys");

// @route GET /api/ownerUsers/register
// @description Register Owners of events
// @access Private
router.post("/register", (req, res) => {
  OwnerUser.findOne({
    email: req.body.email
  }).then(owner => {
    if (owner) {
      res.status(400).json("Owner already exists!");
    } else {
      const newOwner = {
        name: req.body.email,
        email: req.body.email,
        password: req.body.password
      };

      // Hash the password before storing into the database
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newOwner.password, salt, (error, hash) => {
          if (error) {
            throw error;
          } else {
            newOwner.password = hash;
            newOwner
              .save()
              .then(savedOwner => {
                res.json(savedOwner);
                console.log("New Owner has been registered successfully!");
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
