import express from "express";
import { loadJSON } from "../utils.js";

const router = express.Router();
router.get("/", async (req, res) => {
    const { s } = req.query;
    const metadata = await loadJSON(`./data/soundtracks/${s}.json`);

    res.render("home", {
        s: s,
        metadata: metadata
    });
});

export default router;