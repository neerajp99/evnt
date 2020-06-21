const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Owner's Profile Schema
const ownerProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "ownerUsers"
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

module.exports = OwnerProfile = mongoose.model("ownerProfile", ownerProfileSchema);
