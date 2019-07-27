// const express = require("express");
// const router = express.Router();
// const pdf = require("../../services/multer");
// const Grid = require("gridfs-stream");
// const mongoose = require("mongoose");

// // Reference Mongo connection
// const conn1 = mongoose.connection;

// let pdfs;

// conn1.once("open", () => {
//   pdfs = new Grid(conn1.db, mongoose.mongo);
//   pdfs.collection("pdf");
// });

// router.get("/", (req, res) => {
//   pdfs.files
//     .find()
//     .sort({ _id: -1 })
//     .toArray((err, files) => {
//       return res.json(files);
//     });
// });

// router.post("/pdf", pdf.single("file"), (req, res) => {
//   pdfs.files.updateOne(
//     { _id: req.file.id },
//     {
//       $set: {
//         metadata: { title: req.file.filename, content: req.file.filename }
//       }
//     },
//     (err, file) => {
//       pdfs.files.findOne({ filename: req.file.filename }, (err, file) => {
//         return res.json(file);
//       });
//     }
//   );
// });

// router.get("/read/:filename", (req, res) => {
//   pdf.files.findOne({ filename: req.params.filename }, (err, file) => {
//     if (!file || file.length === 0) {
//       return res.status(404).json({
//         err: `${req.params.filename} was not found`
//       });
//     }
//     // Check if file is an image
//     if (file.contentType === "application/pdf") {
//       // If so, ead Grid FS output to browser
//       const readstream = pdf.createReadStream(file.filename);
//       readstream.pipe(res);
//     } else {
//       res.status(404).json({
//         err: `${req.params.filename} is not a pdf`
//       });
//     }
//   });
// });

// module.exports = router;
