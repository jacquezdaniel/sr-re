const express = require("express");
const enforce = require("express-sslify");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const upload = require("./controllers/api/fileRouter");
const email = require("./controllers/api/email");
const keys = require("./config/keys");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to MongoDB
mongoose
  .connect(keys.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Add routes for API and for database.
app.use("/files", upload);
app.use(email);

// Handle any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
