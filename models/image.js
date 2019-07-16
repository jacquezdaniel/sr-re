const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const photoSchema = new Schema({
  path: { type: String },
  caption: { type: String }
});

const Images = mongoose.model("images", photoSchema);

module.exports = Images;
