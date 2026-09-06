import express from "express";
import { loadJSON } from "../utils.js";

const router = express.Router();
router.get("/radio", async (req, res) => {
    const { s } = req.query;
    const data = await loadJSON(`./data/soundtracks/${s}.json`);

    res.render("radio", {
        s: s,
        data: data
    });
});

export default router;