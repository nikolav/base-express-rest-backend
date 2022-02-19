var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  return res.json({
    "app.version": "1.0.0",
    message: "welcome",
    time: new Date().toUTCString(),
  });
});

module.exports = router;
