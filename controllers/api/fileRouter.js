const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Reference Mongo connection
const conn = mongoose.connection;

// init gfs
let gfs;
conn.once("open", () => {
  // init stream
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads"
  });
});

// Gets all files in json format
router.get("/", (req, res) => {
  gfs
    .find()
    .sort({ _id: -1 })
    .toArray((err, files) => {
      return res.json(files);
    });
});

// Check if file is an image
router.get("/", (req, res) => {
  if (!gfs) {
    console.log("some error occured, check connection to db");
    res.send("some error occured, check connection to db");
    process.exit(0);
  }
  gfs.find().toArray((err, files) => {
    // check if files
    if (!files || files.length === 0) {
      return res.json({
        files: false
      });
    } else {
      files.map(file => {
        if (
          file.contentType === "image/png" ||
          file.contentType === "image/jpeg"
        ) {
          file.isImage = true;
        } else {
          file.isImage = false;
        }
        return file;
      });
    }
    return res.json(files);
  });
});

// Displays a specific files in json format
router.get("/:filename", (req, res) => {
  gfs.find({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "That file doesn't exist"
      });
    }
    return res.json(file);
  });
});

// Displays files to screen
router.get("/read/:filename", (req, res) => {
  gfs
    .find({
      filename: req.params.filename
    })
    .toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist"
        });
      }
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});

module.exports = router;
