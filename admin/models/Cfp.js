const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const CfpSchema = new Schema({
    col1: [
        {

        }

    ],
    col2: [

    ],
    col3: [

    ]
})

module.exports = Cfp = mongoose.models('cfpschema', CfpSchema)