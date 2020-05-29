const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const uuidv4 = require("uuid/v4");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const path = require("path");

// Bring in avatar model
const Avatar = require("../../models/Avatar");

// Directory link for storing images
const storageDirectory = path.join(__dirname, "..", "uploadAvatars");

// Using multer disk storage for storing files on the disk.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, storageDirectory);
  },
  // filename is used to determine what the file should be named inside the folder
  filename: (req, file, cb) => {
    const fileName =
      file.originalname
        .toLowerCase()
        .split(" ")
        .join("-") +
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, uuidv4() + "-" + fileName);
  }
});
// Using multer memory storage to store the files as buffer objects
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
});

// @route POST /api/avatar/user
// @description Post user profile avatar
// @access Private
router.post(
  "/user",
  upload.single("profileImage"),
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    // Avatar.findOne({
    //     profileImage: req.user.id.toLowerCase().split(" ").join("-")
    // }).then(profileAvatar => {
    //     if ()
    // })
    console.log("Received files", req.file);
    return res.status(200).json({
      files: req.file
    });
  }
);

module.exports = router;
