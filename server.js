const express = require("express");
const router = require("./controller/index.js");
const app = express();

app.use("/", router);
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.listen(3000);
console.log("Server is running on port 3000");
