const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const uuidv4 = require("uuid/v4");
const multer = require("multer");

// Bring in avatar model
const Avatar = require("../../models/Avatar");

// Using multer disk storage for storing files on the disk.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploadAvatar");
  },
  // filename is used to determine what the file should be named inside the folder
  filename: (req, file, cb) => {
    const fileName =
      req.user.id +
      file.originalname
        .toLowerCase()
        .split(" ")
        .join("-");
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
