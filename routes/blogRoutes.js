const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.render("index", { blogs });
  } catch (e) {
    console.log(e.message);
    res.status(400).json();
  }
});

module.exports = router;
