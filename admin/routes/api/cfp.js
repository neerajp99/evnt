const express = require('express');
const router = express.Router();
const Cfp = require('../../models/Cfp');
const passport = require('passport');

// @route GET 
// @description Fetch all cfp talks 
// @access PRIVATE 
router.get('/', passport.authenticate("jwt", { session: false }), (req, res) => {
    Cfp.find()
        .then(cfp => {
            res.status(200).json(cfp)
        })
        .catch(error => {
            res.status(404).json()
        })
})


module.exports = router;