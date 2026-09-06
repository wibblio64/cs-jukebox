import express from "express";

const router = express.Router();
router.use((req, res, next) => {
    res.status(404).render("notFound");
});

export default router;