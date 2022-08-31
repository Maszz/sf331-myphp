const express = require("express");
const path = require("path");
const router = express.Router();
const process = require("process");
const user = require("../db/user.model.js");
router.get("/", (req, res) => {
  res.render(path.join(process.cwd(), "views", "index.html"), {
    name: "testName",
  });
});
module.exports = router;
