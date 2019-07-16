const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const creds = require("../../config/config");

const router = express.Router();

// Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

const transport = {
  host: "smtp.gmail.com",
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/form/send", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `\n name: ${name}\n email: ${email}\n message: ${message} `;

  const mail = {
    from: name,
    to: "Superiorreplacementservices@gmail.com", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

module.exports = router;
