import express from "express";
import { loadJSON } from "../utils.js";

const router = express.Router();
router.get("/", async (req, res) => {
    const manifest = await loadJSON(`./data/soundtracks/manifest.json`);

    res.render("home", {
        manifest: manifest,
    });
});

export default router;