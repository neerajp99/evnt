const express = require('express')
const router = express.Router()
const passport = require('passport')
const Collaborator = require("../../models/Collaborator")

// @route /api/collaborator/add
// @description Add a collaborator field to the collection with email and special link
// @access PRIVATE 

router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
    const content = req.body;
        Collaborator.findOne({
            email: content.value
        }).then(collab => {
            if (collab) {
                res.status(400).json('Email address already exists')
            } else {
                const email = content.value 
                const link = content.link
                console.log(email, link)

                // Save it to the model 
                const newCollaborator = new Collaborator({
                    email: email,
                    link: link
                })
                newCollaborator.save()
                    .then(savedCollaborator => {
                        console.log(`Collaborator with email address ${email} saved!`)
                        res.json(savedCollaborator)
                    })
                    .catch(error => {
                        res.json(error)
                    })
            }
        }).catch(error => {
            res.json(error)
        })
})


// @route /api/collaborator/
// @description Get all invited collaborators from the collection
// @access PRIVATE 

// router.get('/', passport.authenticate)

module.exports = router;