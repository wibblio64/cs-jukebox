const express = require("express");
const loadJSON = require("../utils.js");

const router = express.Router();
router.get("/", async (req, res) => {
    const manifest = await loadJSON(`./data/albums/manifest.json`);

    res.render("home", {
        manifest: manifest,
    });
});

module.exports = router;