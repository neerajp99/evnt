const express = require("express");
const router = express.Router();
const Event = require("../../models/Event");
const passport = require("passport");

// @route GET /api/events
// @description Get event made by user
// @access Private

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Event.find()
      .then(event => {
        if (!event) {
          return res.status(404).json("Event not found");
        } else {
          res.status(200).json(event);
        }
      })
      .catch(err => {
        res.status(404).json(err);
      });
  }
);

module.exports = router
