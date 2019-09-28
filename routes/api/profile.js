const mongoose = require("mongoose");
const express = require("express");
const router = mongoose.Router();
const User = require("../../models/User");
const Profile = require("../../models/Profile");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// @route GET /api/profile
// @description Get current user's profile
// @access Private

router.get("/", passport.authenticate("jwt", { sesion: false }), (req, res) => {
  Profile.findOne({
    user: req.user.id
  })
    .populate("user", ["name"])
    .then(profile => {
      if (!profile) {
        return res.status(404).status("There is no profile for this user.");
      }
      res.json(profile);
    })
    .catch(error => {
      res.status(404).json(error);
    });
});

// @route GET /api/profile/handle/:handle
// @description Get user profile by handle
// @access Public
router.get("/handle/:handle", (req, res) => {
  Profile.findOne({
    handle: req.params.handle
  })
    .then(profile => {
      if (!profile) {
        res.status(404).json("No profile found with this handle");
      }

      // if profile is found
      res.json(profile);
    })
    .catch(error => {
      res.status(404).json(error);
    });
});

// @route GET /api/profile/user/:user_id
// @description Get user profile by user id
// @access Public
router.get("/user/:user_id", (req, res) => {
  Profile.findOne({
    user: req.params.user_id
  })
    .then(profile => {
      if (!profile) {
        res.status(404).json("No profile found with this user");
      }

      // if profile is found
      res.json(profile);
    })
    .catch(error => {
      res.status(404).json(error);
    });
});

// @route POST /api/profile/
// @description Create user profile
// @access PRIVATE
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // object to store profile details
    const profileData = {};
    profileData.user = req.user.id;

    if (req.body.handle) {
      profileData.handle = req.body.handle;
    }
    if (req.body.organisation) {
      profileData.organisation = req.body.organisation;
    }
    if (req.body.website) {
      profileData.website = req.body.website;
    }
    if (req.body.bio) {
      profileData.bio = req.body.bio;
    }

    //Skills has an array of string, so split into array
    // if (typeof req.body.skills !== "undefined") {
    //   profileData.skills = req.body.skills.split(",");
    // }

    // social links goes here
    profileData.social = {};
    if (req.body.facebook) {
      profileData.social.facebook = req.body.facebook;
    }
    if (req.body.twitter) {
      profileData.social.twitter = req.body.twitter;
    }
    if (req.body.linkedin) {
      profileData.social.linkedin = req.body.linkedin;
    }
    if (req.body.github) {
      profileData.social.github = req.body.github;
    }

    Profile.findOne({
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
              $set: profileData
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
          // if profile is not found, create new profile fields
          Profile.findOne({
            handle: profileData.handle
          })
            .then(profile => {
              if (profile) {
                res.status(400).json("User with this handle already exists");
              }
              // Otherwise save the new profile
              new Profile(profileData)
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
