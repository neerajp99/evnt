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
     Talk.findOne({
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
        })
    }
) 

 // @route POST /api/profile/
// @description Create talks for user
// @access PRIVATE
router.post(
  "/",
  passport.authenticate("jwt", {session : false}),
  (req,res) => {
    
    const newTalk = {}; //Object to store talk of the users
    newTalk.user = req.user.id;

    if(req.body.talk) {
      newTalk.talk = req.body.talk;
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

    Talk.findOne({
        user : req.user.id
    })
        .then((talk) =>{
          if(talk) {
          //If talk exists update it
            Talk.findOneAndUpdate(
              {
                user : req.user.id
              },
              {
                $set : newTalk               
              },
              {
                 new : true
              }
            )
              .then((talk) => {
                  res.json(talk);
              })
                .catch((err) => {
                  res.json(err);
                })
          }
          else {
              //As profiles doesn't exists create it
              new Talk(newTalk)
                .save()
                .then((talk) => {
                    res.status(200).json({talk})
                })
                .catch((err)=> {
                    res.status(404).json(err)
                })
          }
        })
  }

)

module.exports = router;