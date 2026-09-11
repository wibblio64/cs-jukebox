const express = require("express");
const home = require("./routes/home.js");
const radio = require("./routes/radio.js");
const notFound = require("./routes/notFound.js");

const router = express.Router();
router.use(home);
router.use(radio);
router.use(notFound);

module.exports = router;