const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const SpeakerProfile = require("../../models/SpeakerProfile.js");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const Speaker = require("../../models/Speaker.js");

// @route GET /api/speakerProfile/
// @description Get current speaker's profile
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    SpeakerProfile.findOne({
      user: req.user.id
    })
      .populate("user", ["name"])
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no speaker profile found for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(error => {
        res.status(404).json(error);
      });
  }
);

// @route GET /api/speakerProfile/handle/:handle
// @description Get user profile by handle
// @access Public
router.get("/handle/:handle", (req, res) => {
  SpeakerProfile.findOne({
    handle: req.params.handle
  })
    .populate("user", ["name"])
    .then(profile => {
      if (!profile) {
        res.status(404).json("No speaker profile found with this handle");
      }

      // if speaker profile is found
      res.json(profile);
    })
    .catch(error => {
      res.status(404).json(error);
    });
});

// @route GET /api/speakerProfile/speaker/:speaker_id
// @description Get user profile by user id
// @access Public
router.get("/speaker/:speaker_id", (req, res) => {
  SpeakerProfile.findOne({
    user: req.params.user_id
  })
    .populate("user", ["name"])
    .then(profile => {
      if (!profile) {
        res.status(404).json("No speaker profile found with this user");
      }

      // if speaker profile is found
      res.json(profile);
    })
    .catch(error => {
      res.status(404).json(error);
    });
});

// @route POST /api/speakerProfile/
// @description Create speaker profile
// @access PRIVATE
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // object to store speaker profile details
    const speakerProfileData = {};
    speakerProfileData.user = req.user.id;

    if (req.body.handle) {
      speakerProfileData.handle = req.body.handle;
    }
    if (req.body.organisation) {
      speakerProfileData.organisation = req.body.organisation;
    }
    if (req.body.website) {
      speakerProfileData.website = req.body.website;
    }
    if (req.body.bio) {
      speakerProfileData.bio = req.body.bio;
    }

    //Skills has an array of string, so split into array
    // if (typeof req.body.skills !== "undefined") {
    //   profileData.skills = req.body.skills.split(",");
    // }

    // social links goes here
    speakerProfileData.social = {};
    if (req.body.facebook) {
      speakerProfileData.social.facebook =
        `https://facebook.com/` + req.body.facebook;
    }
    if (req.body.twitter) {
      speakerProfileData.social.twitter = `twitter.com/` + req.body.twitter;
    }
    if (req.body.linkedin) {
      speakerProfileData.social.linkedin = req.body.linkedin;
    }
    if (req.body.github) {
      speakerProfileData.social.github =
        `https://github.com/` + req.body.github;
    }

    SpeakerProfile.findOne({
      user: req.user.id
    })
      .then(profile => {
        if (profile) {
          // If profile exists, update it
          Profile.findOneAndUpdate(
            {
              user: req.user.id
            },
            {
              $set: speakerProfileData
            },
            {
              new: true
            }
          )
            .then(profile => {
              res.json(profile);
            })
            .catch(error => {
              res.json(error);
            });
        } else {
          // if speaker profile is not found, create a new profile
          SpeakerProfile.findOne({
            handle: speakerProfileData.handle
          })
            .then(profile => {
              if (profile) {
                res.status(400).json("Speaker with this handle already exists");
              }
              // Otherwise save the new speaker profile
              new Profile(speakerProfileData)
                .save()
                .then(profile => {
                  res.json(profile);
                })
                .catch(error => {
                  res.json(error);
                });
            })
            .catch(error => {
              res.json(error);
            });
        }
      })
      .catch(error => {
        res.json(error);
      });
  }
);

module.exports = router;
