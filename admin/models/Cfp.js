const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const CfpSchema = new Schema({
    all: [],
    shortlisted: [],
    final: [],
})

module.exports = Cfp = mongoose.model('cfpschema', CfpSchema)