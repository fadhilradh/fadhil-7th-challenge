const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("mysql::memory:");
const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

module.exports = User;
