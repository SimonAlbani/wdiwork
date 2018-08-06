const Sequelize = require("sequelize");
const sequelize = new Sequelize("tunr", "inclassuser", "Hartford1810", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false
});

const Artist = sequelize.import("../models/Artist");
const Song = sequelize.import("../models/Song");

Song.belongsTo(Artist);
Artist.hasMany(Song);

sequelize.authenticate().then(() => {
  console.log("connected");
});

module.exports = {
  Sequelize,
  sequelize,
  models: {
    Song,
    Artist
  }
};
