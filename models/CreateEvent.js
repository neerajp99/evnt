const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createEventSchema = new Schema({
  eventName: {
    type: String,
    required: true
  },
  eventBeginDate: {
    type: Date,
    // for testing purpose
    default: Date.now()
  },
  eventEndDate: {
    type: Date,
    // for testing purpose
    default: Date.now()
  },
  eventVenue: {
    type: String,
    required: true
  },
  eventDescription: {
    type: String,
    required: true
  },
  eventWebsite: {
    type: String
  },
  recurringEvent: {
    type: Boolean,
    default: false
  },
  anonymousSubmission: {
    type: Boolean,
    default: true
  },
  cfpDescription: {
    type: String,
    required: true
  },
  cfpNotes: {
    type: String
  },
  additionalDetails: {
    type: String
  },
  talkDuration: [
    {
      talkFormat: {
        type: String,
        required: true
      }
    }
  ],
  talkTags: {
    type: [String],
    required: true
  },
  travelAssitance: {
    type: Boolean,
    default: false
  },
  travelAssitancePolicy: {
    type: String
  }
});

module.exports = CreateEvent = mongoose.model("createEvent", createEventSchema);
