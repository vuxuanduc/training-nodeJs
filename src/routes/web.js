const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/san-pham", (req, res) => {
  res.render("product");
});

module.exports = router;
