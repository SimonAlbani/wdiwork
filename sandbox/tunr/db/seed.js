var DB = require("./connection");

var Seeds = {
  artists: require("./seed_data/artist_data"),
  songs: require("./seed_data/song_data")
};

// bulkCreate()- Create and insert multiple instances in bulk.
DB.models.Artist.bulkCreate(Seeds.artists)
  .then(function() {
    // findAll()- Search for multiple instances.
    return DB.models.Artist.findAll();
  })
  .then(function(artists) {
    var a,
      artist,
      s,
      song,
      songs,
      output = [];
    for (a = 0; a < artists.length; a++) {
      artist = artists[a];
      songs = Seeds.songs[artist.name];
      for (s = 0; s < songs.length; s++) {
        song = songs[s];
        song.artistId = artist.id;
        output.push(song);
      }
    }
    return DB.models.Song.bulkCreate(output);
  })
  .then(function() {
    // Ends the process synchronously with the specified code
    process.exit();
  });
