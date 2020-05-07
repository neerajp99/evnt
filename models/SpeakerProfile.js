const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Speaker Profile Schema
const speakerProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "speakerAuth"
  },
  handle: {
    type: String,
    isRequired: true
  },
  organisation: {
    type: String
  },
  website: {
    type: String
  },
  bio: {
    type: String,
    isRequired: true
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

module.exports = SpeakerProfile = mongoose.model("speakerProfile", speakerProfileSchema);
