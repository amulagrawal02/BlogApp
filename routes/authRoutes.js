const express = require("express");
const router = express.Router();
const Auth = require("../models/auth");

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/register", (req, res) => {
  res.render("auth/signin");
});

router.post("/register", (req, res) => {
  console.log("inside the auth ");
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
