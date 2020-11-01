const express = require("express");
const router = express.Router();
// Bring in Owner's user model
const OwnerUser = require("../../models/OwnerUser");
//Bring in bcrypt to encrypt the password
const bcrypt = require("bcryptjs");
//Bring in json web tokens
const jwt = require("jsonwebtoken");
// Bring in passport
const passport = require("passport");
// Bring in connection keys
const keys = require("../../config/keys");
// Bring in Collaborators
const Collaborator = require("../../models/Collaborator");
// Bring in Confirm Email route 
const confirmEmail = require("./confirmEmail");
// Bring in short-id 
const shortid = require('shortid');

// @route GET /api/ownerUsers/register
// @description Register Owners of events
// @access Public

// router.post("/register", (req, res) => {
//   OwnerUser.findOne({
//     email: req.body.email
//   }).then(owner => {
//     if (owner) {
//       res.status(400).json("Owner already exists!");
//     } else {
//       const newOwner = new OwnerUser({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//       });

//       // Hash the password before storing into the database
//       bcrypt.genSalt(10, (error, salt) => {
//         bcrypt.hash(newOwner.password, salt, (error, hash) => {
//           if (error) {
//             throw error;
//           } else {
//             newOwner.password = hash;
//             newOwner
//               .save()
//               .then(savedOwner => {
//                 res.json(savedOwner);
//                 console.log("New Owner has been registered successfully!");
//               })
//               .catch(error => {
//                 console.log(error);
//               });
//           }
//         });
//       });
//     }
// })
// });

// @route POST /api/ownerUsers/login
// @description Login Owner -> Returs JSON Web Token
// @access Public
router.post("/login", (req, res) => {
  // Get email and password from request body header
  const email = req.body.email;
  const password = req.body.password;

  // Check if user exists or not,
  OwnerUser.findOne({
    email
  })
    .then(owner => {
      console.log('MATCHED',owner)
      if (!owner) {
        return res.status(403).json("No user is registered with this email address!");
      } else {
        if(!owner.verified) {
          return res.status(404).json("Kindly confirm your email address! Check your inbox for detailed instructions!")
        } else {
      // If user exists, decrypt the password from the database and compare
      bcrypt
        .compare(password, owner.password)
        .then(isMatch => {
          if (isMatch) {
            // Create jwt payload once password matched
            const payload = {
              id: owner.id,
              email: owner.email,
              name: owner.name
            };
            console.log("Owner logged in successfully!");
            jwt.sign(
              payload,
              keys.secretOrkey,
              {
                expiresIn: 100000
              },
              (error, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token,
                  payload: payload
                });
              }
            );
          } else {
            return res.status(400).json("Incorrect password");
          }
        })
        .catch(error => {
          return res.status(400).json("Password does not match!");
        });
      }
      }
    })
    .catch(error => {
      return res.status(404).json(error);
    });
});


// @route GET /api/ownerUsers/register/
// @description Register Collaborators
// @access Public

router.post("/register", (req, res) => {
  Collaborator.findOne({
    email: req.body.email
  }).then(collaborator => {
    // Check if the user with this email address is invited as a collaborator 
    if (!collaborator) {
      res.status(404).json('Incorrect email address used!')
    } else {
      // Check if the user has already registered
      OwnerUser.findOne({
        email: req.body.email
      }).then(registeredUser => {
        if (registeredUser) {
          res.status(400).json('User already registered with this email address!')
        } else {
          const generatedString = shortid.generate();
          const updatedAt = new Date().getTime();
          const concatenate_link = generatedString + updatedAt ;
          const link_string = concatenate_link;
          // Create new owner user
          const newCollaborator = new OwnerUser({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            link: link_string
          })
    
          // Hash the password before adding it to the database 
          bcrypt.genSalt(10, (error, salt) => {
            bcrypt.hash(newCollaborator.password, salt, (error, hash) => {
              if (error) {
                throw error;
              } else {
                newCollaborator.password = hash;
                newCollaborator
                  .save()
                  .then(savedCollaborator => {
                    // console.log("New Collaborator registered successfully!", savedCollaborator)
                    res.json(savedCollaborator)

                    // Send an email to confirm email 
                    confirmEmail({
                      "from": "neerajp1999@gmail.com", 
                      "to": savedCollaborator.email, 
                      "message": "conference", 
                      "event": "PyCon Universe", 
                      "link": `http://localhost:3000/confirm/${savedCollaborator.link}`,
                    }, 
                      (error, info) => {
                      res.json('Confirmation email sent!', info)
                    })
                  })
                  .catch(error => {
                    console.log(error)
                  })
              }
            })
          })
        }
      })
    }
  })
});

module.exports = router;
