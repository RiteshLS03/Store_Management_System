// models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("../connection"); // Assuming you have a database configuration file

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // Other user attributes like name, email, etc.
});

module.exports = User;
