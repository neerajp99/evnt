const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const talkSchema = new Schema({});

module.exports = Talk = mongoose.model("talks", talkSchema);
