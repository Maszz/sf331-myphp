const express = require("express");
const path = require("path");
const router = express.Router();
const process = require("process");
const user = require("../db/user.model.js");
router.get("/", (req, res) => {
  /**
   * Query ข้อมูลตรงนี้เเล้วใส่เเทน `testName`
   */
  res.render(path.join(process.cwd(), "views", "index.html"), {
    data: "testName",
  });
});
module.exports = router;
