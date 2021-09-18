const { Sequelize, DataTypes } = require("sequelize");

const Blog = sequelize.define("Blog", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
  },
  img: {
    type: DataTypes.STRING,
  },
});

// this function use to create the table in database "blog_app" if the table is already exits it do nothing
Blog.sync()
  .then(() => {
    console.log("Table create successfully");
  })
  .catch((e) => {
    console.log(e.message);
    console.log("Table cannot be created");
  });

module.exports = Blog;
