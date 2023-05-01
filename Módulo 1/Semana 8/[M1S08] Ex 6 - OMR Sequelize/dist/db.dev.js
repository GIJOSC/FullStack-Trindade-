"use strict";

var Sequelize = require("sequelize");

var sequelize = new Sequelize("crud", "postgres", "senai", {
  dialect: "postgres",
  host: "localhost",
  port: 5432
});
module.exports = sequelize;