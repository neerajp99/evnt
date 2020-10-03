const express = require('express')
const router = express.Router()
const Talk = require('../../models/Talk')
const passport = require('passport')
const OwnerUser = require('../../models/OwnerUser')

router.get('/allTalks', 
        passport.authenticate('jwt', {session: false}), (req, res) => {
    Talk.find()
        .then(talks => {
            res.json(talks)
        })
        .catch(error => {
            res.json(error)
        })
})


module.exports = router