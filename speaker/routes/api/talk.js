const express = require('express');
const router = express.Router();
const Talk = require('../../models/Talk');
const passport = require('passport');
const Cfp = require('../../models/Cfp');

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
    new Talk(newTalk)
    .save()
    .then((talk) => {
      // Search for CFP, and append an instance of talk id
      Cfp.find()
        .then(cfp => {
          cfp[0].all.push(talk._id)
          cfp[0].save()
            .then(updatedCfp => {
              console.log(updatedCfp)
            })
            .catch(error => {
              console.log(error)
            })
        })
        .catch(error => {
          console.log(error)
        })
      res.status(200).json(talk);
    })
    .catch((err) => {
      res.status(404).json(err);
    })
  }
)

// @route POST /api/talk/update/:id
// @description Update talk
// @access PRIVATE

router.post('/update/:id', passport.authenticate("jwt", { session: false }), (req, res) => {
  Talk.findOne({
    _id: req.params.id
  }).then(talk => {
    const newTalk = {}
    if (req.body.talk) {
      newTalk.title = req.body.talk
    }
    if (req.body.elevatorPitch) {
      newTalk.elevatorPitch = req.body.elevatorPitch
    }
    if (req.body.talkDuration) {
      newTalk.talkDuration = req.body.talkDuration
    }
    if (req.body.audienceLevel) {
      newTalk.audienceLevel = req.body.audienceLevel
    }
    if (req.body.description) {
      newTalk.description = req.body.description
    }
    if (req.body.additionalDetails) {
      newTalk.additionalDetails = req.body.additionalDetails
    }
    if (req.body.outcome) {
      newTalk.outcome = req.body.outcome
    }
    if (req.body.shortlisted) {
      newTalk.shortlisted = req.body.shortlisted
    }
    if (req.body.talkTags) {
      newTalk.talkTags = req.body.talkTags
    }
    if (talk) {
      Talk.findOneAndUpdate(
        {
          _id: req.params.id
        },
        {
          $set: newTalk
        },
        {
          new: true
        }
      ).then(updatedTalk => {
        console.log('UPDATED', updatedTalk)
        res.status(200).json(updatedTalk)
      }).catch(err => {
        res.json(err)
      })
    }
  }).catch(error => {
    res.json(error)
  })
})

// @route GET /api/talk/getTalk/:id
// @description Fetch talks using talk id
// @access PRIVATE

router.get("/getTalk/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  Talk.findOne({
    _id: req.params.id
  })
  .then(talk => {
    if (!talk) {
      errors.noIdTalk = "There is no talk available for this talk id anymore."
      return res.status(404).json(errors)
    }
    else{
      res.json({talk})
    }
  })
  .catch(error => {
    res.status(404).json(error)
  })
})


// @route DELETE /api/talk/deleteTalk/:id
// @description Delete talk using talk ID

router.delete("/deleteTalk/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  Talk.deleteOne({_id: req.params.id}, error => {
    if (!error) {
      Talk.findOne({_id: req.params.id})
        .then(talk => {
          res.json(talk)
        })
    } else {
      return res.status(400).json(error)
    }
  })
} )


module.exports = router;
