const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const crypto = require("crypto");
const path = require("path");
const keys = require("../config/keys");

// Create Storage Engine
const storage = new GridFsStorage({
  url: keys.MONGO_URI,
  cache: false,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      // Create a unique 16 character filname
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "pdf" //should match gfs.collection
        };
        resolve(fileInfo);
      });
    });
  }
});
const pUpload = multer({ storage });

module.exports = pUpload;
