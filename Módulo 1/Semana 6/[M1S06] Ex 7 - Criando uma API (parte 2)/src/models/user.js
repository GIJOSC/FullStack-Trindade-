const Sequelize = require("sequelize");
const connection = require("../database");

const User = connection.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  idade: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  cargo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
