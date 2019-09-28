const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: True
  },
  description: {
    type: String,
    required: True
  },
  website: {
    type: String
  },
  social: {
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    youtube: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  organisers: [
    {
      name: {
        type: String
      },
      description: {
        type: String
      },
      social: {
        facebook: {
          type: String
        },
        linkedin: {
          type: String
        },
        twitter: {
          type: String
        }
      }
    }
  ]
});
module.exports = Event = mongoose.model("event", EventSchema);
