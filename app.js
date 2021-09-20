const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./db");

// connecting with database

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: "true" }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

const blogRouter = require("./routes/blogRoutes");
const authRouter = require("./routes/authRoutes");

app.get("/", (req, res) => {
  res.render("home");
});

app.use(blogRouter);
app.use(authRouter);

// for server

app.listen(3000, () => {
  console.log("Server start running at port", 3000);
});
