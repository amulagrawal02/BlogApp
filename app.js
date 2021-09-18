const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./db");

// connecting with database

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

const blogRouter = require("./routes/blogRoutes");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(blogRouter);

// for server
app.listen(3000, () => {
  console.log("Server start running at port", 3000);
});
