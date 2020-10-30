const express = require("express");
const router = express.Router();
const OwnerUser = require("../../models/OwnerUser");

// @route POST
// @description Check for authentic redirect
// @access Public

router.post("/checkLegitConfirm", (req, res) => {
  OwnerUser.findOne({
    link: req.body.paramsString
  })
    .then(response => {
      if (response) {
        res.status(200).json(response);
      } else {
        return res.status(404).json("Incorrect link url!");
      }
    })
    .catch(error => {
      return res.status(400).json(error);
    });
});

// @route POST
// @description Confirm Email
// @access Public

router.post("/confirmEmail/:link", (req, res) => {
  OwnerUser.findOne({
    link: req.params.link
  })
    .then(response => {
      if (response) {
        // Current user object
        const UpdatedUser = {};
        // Update permission to 1
        UpdatedUser.permission = 1;
        // Update verified to true
        UpdatedUser.verified = true;
        // Get current email
        UpdatedUser.email = response.email;
        // Get current name
        UpdatedUser.name = response.name;
        // Get current password
        UpdatedUser.password = response.password;
        // Get new date
        UpdatedUser.date = new Date().toISOString();
        OwnerUser.findOneAndUpdate(
          {
            email: UpdatedUser.email
          },
          {
            $set: UpdatedUser
          },
          {
            new: true
          }
        )
          .then(owner => {
            res.status(200).json(owner);
          })
          .catch(error => {
            res.json(400).json(error);
          });
      } else {
        return res.status(404).json("Incorrect link, not found!");
      }
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

module.exports = router;
