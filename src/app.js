import express from "express";
import nunjucks from "nunjucks";
import router from "./router.js";

const app = express();

nunjucks.configure("views", {
    autoescape: true,
    express: app,
    watch: true
});

app.set("view engine", "njk");
app.use(express.static("public"));
app.use("/", router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
