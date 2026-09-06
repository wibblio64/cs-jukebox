import express from "express";
import home from "./routes/home.js";
import notFound from "./routes/notFound.js";

const router = express.Router();
router.use(home);
router.use(notFound);

export default router;