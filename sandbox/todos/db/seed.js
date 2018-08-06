const connection = require("./connection");
const seedData = require("./seeds.json");

connection.Todos.destroy({ where: {} }).then(() => {
  connection.Todos.bulkCreate(seedData).then(() => {
    process.exit();
  });
});
