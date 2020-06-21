const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const avatarSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "speakerAuth"
  },
  profileImage: {
    type: String
  }
});

module.exports = mongoose.model("avatar", avatarSchema);
