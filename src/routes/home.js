import express from "express";
import { loadJSON } from "../utils.js";

const router = express.Router();
router.get("/", async (req, res) => {
    const { s } = req.query;
    const data = await loadJSON(`./data/soundtracks.json`);

    res.render("home", {
        s: s,
        data: data
    });
});

export default router;