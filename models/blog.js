const { Sequelize, DataTypes } = require("sequelize");

const Blog = sequelize.define("Blog", {
  // Model attributes are defined here
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
    // allowNull defaults to true
  },

  img: {
    type: DataTypes.STRING,
  },
});

Blog.sync()
  .then(() => {
    console.log("Table created Successfully");
  })
  .catch((e) => {
    console.log(e.message);
    console.log("Cannot Create the table");
  });

module.exports = Blog;
