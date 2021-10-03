const express = require("express");
const router = express.Router();
const User = require("../models/auth");
const passport = require("passport");

router.get("/login", (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  res.render("auth/login");
});

router.get("/register", (req, res) => {
  res.render("auth/signup");
});

router.post("/register", async (req, res) => {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  const sameEmail = await User.findOne({ where: { email: req.body.email } });
  const sameUserName = await User.findOne({
    where: { username: req.body.username },
  });
  if (sameEmail || sameUserName) {
    console.log("already someone have username/email");
    return res.redirect("/register");
  }

  await User.create(user).then(function (newUser, created) {
    if (!newUser) {
      return res.redirect("/register");
    }
    if (newUser) {
      console.log("Register successfully");
      return res.redirect("/login");
    }
  });
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    return res.redirect("/");
  }
);

module.exports = router;
