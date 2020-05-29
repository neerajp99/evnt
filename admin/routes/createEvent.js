const express = require("express");
const router = express.Router();
// Bring in CreateEvent model
const CreateEvent = require("../../models/CreateEvent");
// Bring in passport and json web tokens
const jwt = require("jsonwebtoken");
const passport = require("passport");

// @route POST /api/createEvent
// @description Register Events created by owners
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Initialise event data as an empty object
    const eventData = {};
    // Add object items
    // Event Name
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
    if (req.body.recurringEvent) {
      eventData.recurringEvent = req.body.recurringEvent;
    }
    // Is event submission anonymous
    if (req.body.recurringEvent) {
      eventData.recurringEvent = req.body.recurringEvent;
    }
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
    if (req.body.talkDuration.talkFormat) {
      eventData.talkDuration.talkFormat = req.body.talkDuration.talkFormat;
    }
    // Talk Tags
    if (typeof req.body.talkTags !== "undefined") {
      profileData.talkTags = req.body.talkTags.split(",");
    }
    // Is there travel assistance
    if (req.body.travelAssistance) {
      eventData.travelAssistance = req.body.travelAssistance;
    }
    // Travel Assistance policy, if any
    if (req.body.travelAssistancePolicy) {
      eventData.travelAssistancePolicy = req.body.travelAssistancePolicy;
    }
  }
);

module.exports = router;
