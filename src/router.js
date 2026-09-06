import express from "express";
import home from "./routes/home.js";
import radio from "./routes/radio.js";
import notFound from "./routes/notFound.js";

const router = express.Router();
router.use(home);
router.use(radio);
router.use(notFound);

export default router;