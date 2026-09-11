const express = require("express");
const loadJSON = require("../utils.js");

const router = express.Router();
router.get("/radio", async (req, res) => {
    const { s } = req.query;
    const data = await loadJSON(`./data/albums/${s}.json`);

    res.render("radio", {
        s: s,
        data: data
    });
});

module.exports = router;