const passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const User = require("../models/auth");

passport.use(
  new LocalStrategy(async function (email, password, done) {
    console.log(email, password);
    const newUser = await User.findOne({ where: { email: email } });
    if (newUser) {
      return done(null, newUser);
    }
    return done(null, false);
  })
);

//serialize
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
// deserialize user
passport.deserializeUser(function (id, done) {
  User.findOne({ where: { id: id } }).then(function (user) {
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

module.exports = passport;
