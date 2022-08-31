const express = require("express");
const router = require("./controller/index.js");
const app = express();

app.use("/", router);
app.listen(3000);
