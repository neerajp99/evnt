const express = require("express");
const router = express.Router();
const Event = require("../../models/Event");
const passport = require("passport");

// @route GET /api/event
// @description Get event made by user
// @access Private

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Event.findOne({
      user: req.user.id
    })
      .populate("user", ["name"])
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

// @route POST /api/event/
// @description Create events
// @access PRIVATE
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // object to store event details
    const eventData = {};
    eventData.user = req.user.id;

    if (req.body.name) {
      eventData.name = req.body.name;
    }
    if (req.body.venue) {
      eventData.venue = req.body.venue;
    }
    if (req.body.organisation) {
      eventData.startDate = req.body.startDate;
    }
    if (req.body.endDate) {
      eventData.endDate = req.body.endDate;
    }
    if (req.body.description) {
      eventData.description = req.body.description;
    }
    if (req.body.website) {
      eventData.website = req.body.website;
    }

    // social links goes here
    eventData.social = {};
    if (req.body.facebook) {
      eventData.social.facebook = `https://facebook.com/` + req.body.facebook;
    }
    if (req.body.twitter) {
      eventData.social.twitter = `twitter.com/` + req.body.twitter;
    }
    if (req.body.linkedin) {
      eventData.social.linkedin = req.body.linkedin;
    }
    if (req.body.github) {
      eventData.social.github = `https://github.com/` + req.body.github;
    }

    new Event(eventData)
      .save()
      .then(event => {
        res.status(200).json(event);
      })
      .catch(err => {
        res.status(404).json("Could not save the event data");
      });
  }
);

// @route POST /api/event/
// @description Update event
// @access PRIVATE

router.post(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Event.findByIdAndUpdate(
      {
        _id: req.params.id
      },
      {
        name: req.body.name,
        venue: req.body.venue,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
        website: req.body.website,
        outcome: req.body.outcome
        //    "social.facebook" : req.body.social.facebook,
        //    "social.twitter" : req.body.social.twitter,
        //    "youtube" : req.body.social.youtube,
        //    "instagram" : req.body.social.instagram
      }
    )
      .then(event => {
        res.status(200).json(event);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  }
);
module.exports = router;
