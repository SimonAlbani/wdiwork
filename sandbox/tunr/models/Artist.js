function artistModel(sequelize, DataTypes) {
  return sequelize.define("artist", {
    name: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    nationality: DataTypes.STRING
  });
}

module.exports = artistModel;
