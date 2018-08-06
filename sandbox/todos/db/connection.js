const Sequelize = require("sequelize");

const sequelize = new Sequelize("todos", "inclassuser", "Hartford1810", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false
});

const Todos = sequelize.import("../models/Todo");

sequelize.authenticate().then(() => {
  console.log("connected to the database");
});

module.exports = {
  sequelize,
  Sequelize,
  Todos
};
