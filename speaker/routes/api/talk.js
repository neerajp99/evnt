const express = require('express');
const router = express.Router();
const Talk = require('../../models/Talk');
const passport = require('passport');

// @route GET /api/talk
// @description Get current user's talk
// @access Private

router.get(
 "/",
  passport.authenticate("jwt", {session : false}),
  (req,res) => {
     const errors = {};
     Talk.find({
      user : req.user.id
     })
       .populate("user", ["name"])
       .then((talk) => {
         if(!talk) {
           errors.notalk = "There is no talk for this user";
             return res.status(404).json(errors);
         }
          else {
            res.json({talk})
          }
        }).catch((err) =>{
          res.status(404).json(err)
        })
    }
)

// @route GET /api/talk/shortlisted/id
// @description Shortlist talks
// @access PUBLIC

router.get(
  "/shortlisted/:id", (req,res) => {
    Talk.findByIdAndUpdate(
      {
        _id : req.params.id
      },
      {
        shortlisted : "true"
      },
      {
        new : true,
        runValidators : true
      }
    )
      .then((talk) => {
          if(!talk) {
            return res.status(404).json("Sorry, Talk not found");
          }
          res.status(200).json(talk);
      })
      .catch((err) => {
        res.status(404).json(err);
      })
  })

// @route GET /api/talk/shortlisted
// @description Shortlisted talks
// @access PUBLIC

router.get(
  "/shortlisted",(req,res) => {
    Talk.findOne({
        shortlisted : "true"
    })
      .then((talk) => {
          if(!talk) {
            return res.status(404).json("No talks were shortlisted");
          }
          res.status(200).json(talk);
      })
      .catch((err) => {
          res.status(404).json(err);
      })
  })

// @route POST /api/talk/
// @description Create talks for user
// @access PRIVATE

router.post(
  "/",
  passport.authenticate("jwt", {session : false}),
  (req,res) => {

    const newTalk = {}; //Object to store talk of the users
    newTalk.user = req.user.id;

    if(req.body.talk) {
      newTalk.title = req.body.talk;
    }
    if(req.body.elevatorPitch) {
      newTalk.elevatorPitch = req.body.elevatorPitch;
    }
    if(req.body.talkDuration) {
      newTalk.talkDuration = req.body.talkDuration;
    }
    if(req.body.audienceLevel) {
      newTalk.audienceLevel = req.body.audienceLevel;
    }
    if(req.body.description) {
      newTalk.description = req.body.description;
    }
    if(req.body.additionalDetails) {
        newTalk.additionalDetails = req.body.additionalDetails;
    }
    if(req.body.outcome) {
        newTalk.outcome = req.body.outcome;
    }
    if(req.body.talkTags) {
        newTalk.talkTags = req.body.talkTags
}
console.log(newTalk)

    new Talk(newTalk)
    .save()
    .then((talk) => {
      res.status(200).json(talk);
    })
    .catch((err) => {
      res.status(404).json(err);
    })
  }
)

// @route POST /api/talk/
// @description Update talk
// @access PRIVATE

router.post(
  "/update/:id",
  passport.authenticate("jwt", {session : false}),
  (req,res) => {
    Talk.findByIdAndUpdate(
      {
        _id : req.params.id
      },
      {
        "title" : req.body.title,
         "elevatorPitch" : req.body.elevatorPitch,
         "talkDuration" : req.body.talkDuration,
         "audienceLevel" : req.body.audienceLevel,
         "description" : req.body.description,
         "additionalDetails" : req.body.additionalDetails,
         "outcome" : req.body.outcome,
         "shortlisted" : req.body.shortlisted,
      }, {
        new : true,
        runValidators : true
      }
    )
    .then((talk) => {
      res.status(200).json(talk);
    })
    .catch((err) => {
      res.status(404).json(err);
    })
  }
)
module.exports = router;
