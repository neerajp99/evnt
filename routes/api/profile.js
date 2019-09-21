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
