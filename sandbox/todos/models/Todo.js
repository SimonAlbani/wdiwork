module.exports = function(sequelize, DataTypes) {
  return sequelize.define("todo", {
    title: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
};
