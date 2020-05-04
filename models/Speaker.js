const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Speaker Auth Details 
const speakerAuthSchema = new Schema({
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
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = SpeakerAuth = mongoose.model('speakerAuth', speakerAuthSchema)

