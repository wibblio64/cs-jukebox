const express = require("express");

const router = express.Router();
router.use((req, res, next) => {
    res.status(404).render("notFound");
});

module.exports = router;