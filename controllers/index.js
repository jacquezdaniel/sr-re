const path = require("path");
const router = require("express").Router();

const email = require("./api/email");
const upload = require("./api/upload");

// API Routes
router.use("/api", email, upload);

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
