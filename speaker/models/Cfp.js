const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const CfpSchema = new Schema({
    all: [
        {
            refID: {
                type: String,
                required: true 
            }
        }
    ],
    shortlisted: [
        {
            refID: {
                type: String,
                required: true 
            }
        }
    ],
    final: [
        {
            refID: {
                type: String,
                required: true 
            }
        }
    ]
})

module.exports = Cfp = mongoose.model('cfpschema', CfpSchema)