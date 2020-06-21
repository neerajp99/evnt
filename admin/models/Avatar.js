const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const avatarSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "ownerUsers"
  },
  profileImage: {
    type: String
  }
});

module.exports = mongoose.model("avatar", avatarSchema);
