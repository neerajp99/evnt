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

    if (req.body.eventName) {
      eventData.eventName = req.body.eventName;
    }
    // Event begin date
    if (req.body.eventBeginDate) {
      eventData.eventBeginDate = req.body.eventBeginDate;
    }
    // Event End date
    if (req.body.eventEndDate) {
      eventData.eventEndDate = req.body.eventEndDate;
    }
    // Event Venue
    if (req.body.eventVenue) {
      eventData.eventVenue = req.body.eventVenue;
    }
    // Event Description - long string (might convert md5 hash etc)
    if (req.body.eventDescription) {
      eventData.eventDescription = req.body.eventDescription;
    }
    // Event Website
    if (req.body.eventWebsite) {
      eventData.eventWebsite = req.body.eventWebsite;
    }
    // Is event recurring?
    // if (req.body.recurringEvent) {
    //   eventData.recurringEvent = req.body.recurringEvent;
    // }
    // What's the event code of conduct*?
    if (req.body.eventCodeOfConduct) {
      eventData.eventCodeOfConduct = req.body.eventCodeOfConduct;
    }
    // Is event submission anonymous
    // if (req.body.anonymousSubmission) {
    //   eventData.anonymousSubmission = req.body.anonymousSubmission;
    // }
    // Event Call for Propsal Details
    if (req.body.cfpDescription) {
      eventData.cfpDescription = req.body.cfpDescription;
    }
    // Event CFP Notes
    if (req.body.cfpNotes) {
      eventData.cfpNotes = req.body.cfpNotes;
    }
    // Any additional details
    if (req.body.additionalDetails) {
      eventData.additionalDetails = req.body.additionalDetails;
    }
    // Talk durations
    if (req.body.talkDuration) {
      eventData.talkDuration = req.body.talkDuration;
    }
    // Talk Tags
    if (typeof req.body.talkTags !== "undefined") {
      eventData.talkTags = req.body.talkTags.split(",");
    }
    // Is there travel assistance
    if (req.body.travelAssistance) {
      eventData.travelAssistance = req.body.travelAssistance;
    }
    // Travel Assistance policy, if any
    if (req.body.travelAssistancePolicy) {
      eventData.travelAssistancePolicy = req.body.travelAssistancePolicy;
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
        res.status(404).json(err);
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
        eventName: req.body.eventName,
        eventVenue: req.body.eventVenue,
        eventStartDate: req.body.eventStartDate,
        eventEndDate: req.body.eventEndDate,
        eventDescription: req.body.eventDescription,
        eventWebsite: req.body.eventWebsite,
        // recurringEvent: req.body.recurringEvent,
        eventCodeOfConduct: req.body.eventCodeOfConduct,
        // anonymousSubmission: req.body.anonymousSubmission,
        cfpDescription: req.body.cfpDescription,
        cfpNotes: req.body.cfpNotes,
        additionalDetails: req.body.additionalDetails,
        talkDuration: req.body.talkDuration,
        talkTags: req.body.talkTags,
        travelAssistance: req.body.travelAssistance,
        travelAssistancePolicy:
          requestAnimationFrame.body.travelAssistancePolicy,
        social: req.body.social

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
