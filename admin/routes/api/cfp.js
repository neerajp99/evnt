const express = require('express');
const router = express.Router();
const Cfp = require('../../models/Cfp');
const passport = require('passport');
const { update } = require('../../models/Cfp');

// @route GET 
// @description Fetch all cfp talks 
// @access PRIVATE 
router.get('/', passport.authenticate("jwt", { session: false }), (req, res) => {
    Cfp.find()
        .then(cfp => {
            res.status(200).json(cfp)
        })
        .catch(error => {
            res.status(404).json(error)
        })
})

// @route POST 
// @description Update talks orientation 
// @access PRIVATE 
router.post('/updateCfp', passport.authenticate('jwt', { session: false }), (req, res) => {
    Cfp.find()
    .then(cfp => {
        // const updatedTalk = {}
        // updatedTalk.all = req.body.all
        // updatedTalk.shortlisted = req.body.shortlisted 
        // updatedTalk.final = req.body.final 
        // console.log(cfp)
        res.status(200).json(cfp)

    })
    .catch(error => {
        res.status(404).json(error)
    })
})


module.exports = router;