const express = require("express");
// Bring in express router
const router = express.Router();
// Bring in passport
const passport = require("passport");
// Bring in bcryptjs for encryption
const bcrypt = require("bcryptjs");
// Bring in jsonwebtokens
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys.js");

// Bring in Speaker model
const Speaker = require("../../models/Speaker.js");

// @route POST /api/speaker/register
// @description Register speaker
// @access PUBLIC
router.post("/register", (req, res) => {
  Speaker.findOne({
    email: req.body.email
  }).then(speaker => {
    // If speaker exists, drop an error
    if (speaker) {
      res.status(400).json("Speaker with this email address already exists!");
    } else {
      // If speaker is not regsiter, create it
      const newSpeaker = new Speaker({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Before saving the speaker, encrypt the password
      bcrypt.genSalt(10, (error, salt) => {
        // Pass the returned salt to generate the hash value
        bcrypt.hash(newSpeaker.password, salt, (error, hash) => {
          if (error) {
            throw error;
          } else {
            newSpeaker.password = hash;
            // Save the speaker to the database
            newSpeaker
              .save()
              .then(createdSpeaker => {
                res.status(200).json("Speaker has been created successfully!");
              })
              .catch(err => {
                res.json(err);
              });
          }
        });
      });
    }
  });
});

module.exports = router;
