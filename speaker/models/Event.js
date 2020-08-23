const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "ownerUsers"
  },
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
  // recurringEvent: {
  //   type: Boolean,
  //   default: false
  // },
  eventCodeOfConduct: {
    type: String
  },
  // anonymousSubmission: {
  //   type: Boolean,
  //   default: true
  // },
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
      value: {
        type: String,
        required: true
      }
    }
  ],
  talkTags: {
    type: [String]
  },
  travelAssistance: {
    type: Boolean,
    default: false,
    required: true
  },
  travelAssistancePolicy: {
    type: String
  },
  social: {
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    github: {
      type: String
    },
    linkedin: {
      type: String
    }
  }
});
module.exports = Event = mongoose.model("event", EventSchema);
