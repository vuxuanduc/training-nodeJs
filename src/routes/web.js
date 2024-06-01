const express = require("express");
const { homePage } = require("../controllers/HomeController");
const router = express.Router();

router.get("/", homePage);

router.get("/san-pham", (req, res) => {
  res.render("product");
});

module.exports = router;
