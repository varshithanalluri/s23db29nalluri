var express = require("express");
var router = express.Router();
var Account = require("../models/account");
var passport = require('passport');

router.get("/", function (req, res) {
  res.render("index", { title: "item App", user: req.user });
});
router.get("/register", function (req, res) {
  res.render("register", { title: "item App Registration" });
});
router.post("/register", function (req, res) {
  Account.findOne({ username: req.body.username })
    .then(function (user) {
      if (user != null) {
        console.log("exists " + req.body.username);
        return res.render("register", {
          title: "Registration",
          message: "Existing User",
          account: req.body.username,
        });
      }
      let newAccount = new Account({ username: req.body.username });
      Account.register(newAccount, req.body.password, function (err, user) {
        if (err) {
          console.log("db creation issue " + err);
          return res.render("register", {
            title: "Registration",
            message: "access error",
            account: req.body.username,
          });
        }
        if (!user) {
          return res.render("register", {
            title: "Registration",
            message: "access error",
            account: req.body.username,
          });
        }
      });
      console.log("Success, redirect");
      res.redirect("/");
    })
    .catch(function (err) {
      return res.render("register", {
        title: "Registration",
        message: "Registration error",
        account: req.body.username,
      });
    });
});

router.get("/login", function (req, res) {
  res.render("login", { title: "item App Login", user: req.user });
});
router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("redirected");
  res.redirect("/");
});
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      console.log("error occurred while login " + err);
      return next(err);
    }
    res.redirect("/");
  });
});
router.get("/ping", function (req, res) {
  res.status(200).send("pong!");
});
module.exports = router;
router.get("/ping", function (req, res) {
  res.status(200).send("pong!");
});
module.exports = router;