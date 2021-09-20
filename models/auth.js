const { Sequelize, DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

User.sync()
  .then(() => {
    console.log("Table create successfully 2");
  })
  .catch((e) => {
    console.log(e.message);
    console.log("Table cannot be created");
  });

module.exports = User;
