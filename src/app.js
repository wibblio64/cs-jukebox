const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");
const router = require("./router.js");

const app = express();

nunjucks.configure("views", {
    autoescape: true,
    express: app,
    watch: true
});

app.set("view engine", "njk");
app.use(express.static("public"));
app.use("/assets", express.static(path.join(process.execPath, "..", "assets")));
app.use("/", router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
