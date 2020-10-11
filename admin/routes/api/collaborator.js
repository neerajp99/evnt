const express = require('express')
const router = express.Router()
const passport = require('passport')
import Collaborator from "../../models/Collaborator"

// @route /api/collaborator/add
// @description Add a collaborator field to the collection with email and special link
// @access PRIVATE 

router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
    const content = req.body.collaborator
    // Loop over for N collaborators
    for (let i = 0 ; i < content.length ; i++) {
        Collaborator.findOne({
            email: content[i].email
        }).then(collab => {
            if (collab) {
                res.status(400).json('Email address already exists')
            } else {
                const email = content[i].email 
                const link = content[i].link

                // Save it to the model 
                const newCollaborator = {
                    email: email,
                    link: link
                }

                newCollaborator.save()
                    .then(savedCollaborator => {
                        res.json(savedCollaborator)
                        console.log(`Collaborator with email address ${email} saved!`)
                    })
            }
        }).catch(error => {
            res.json(error)
        })
    }
})