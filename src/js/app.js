const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");
const router = require("./router.js");

const app = express();
const PORT = 3000;

nunjucks.configure(path.join(__dirname, "..", "views"), {
    autoescape: true,
    express: app,
    watch: true,
    noCache: true
});

app.set("view engine", "njk");
app.use(express.static("public"));
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
