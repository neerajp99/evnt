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

module.exports = router;
