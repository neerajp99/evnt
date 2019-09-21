const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Profile Schema
const profileSchema = new Schema({
  user: {
    type: Schema.types.ObjectId,
    ref: users
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

module.exports = Profile = mongoose.model("profile", profileSchema);
