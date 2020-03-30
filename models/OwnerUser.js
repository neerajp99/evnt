// Mongoose schema for event organisers - Owner of an event
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerUserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  events: [
    {
      eventId: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = OwnerUser = mongoose.model("ownerUsers", ownerUserSchema);
