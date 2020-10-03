const express = require("express");
const router = express.Router();
const Talk = require("../../models/Talk");
const passport = require("passport");

// @route /api/dashboard/allTalks
// @description Fetch all talks from the collection
// @access PRIVATE

router.get(
  "/allTalks",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Talk.find()
      .then(talks => {
        res.status(200).json(talks);
      })
      .catch(error => {
        res.status(404).json(error);
      });
  }
);

// @route /api/dashboard/allAttendees
// @description Fetch all attendees who signed up
// @access PRIVATE

// @route /api/dashboard/talksSelected
// @description Fetch all the selected talks
// @access PRIVATE

module.exports = router;
