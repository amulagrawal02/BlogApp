const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./db");
const session = require("express-session");

const User = require("./models/auth");
const { isLoggedIn } = require("./middleware");

// connecting with database

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: "true" }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

const blogRouter = require("./routes/blogRoutes");
const authRouter = require("./routes/authRoutes");

app.use(
  session({
    secret: "keyboardcat",
    resave: false,
    saveUninitialized: true,
  })
);

const passport = require("passport");
const passportLocal = require("./config/passport-local-stretgy");
// initialize passport to use in our application
app.use(passport.initialize());
// use middleware to use session
app.use(passport.session());

app.get("/", isLoggedIn, (req, res) => {
  return res.render("home");
});

app.use(blogRouter);
app.use(authRouter);

//load passport strategies

// for server

app.listen(3000, () => {
  console.log("Server start running at port", 3000);
});
