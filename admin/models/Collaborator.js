const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CollaboratorSchema = new Schema({
    email: {
        type: String,
        required: true 
    }, 
    link: {
        type: String,
        required: true
    }
})

module.exports = Collaborator = mongoose.model("collaborator", CollaboratorSchema)