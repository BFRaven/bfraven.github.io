var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "playlistDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllSongs();
  queryClassicRock();
  queryDanceSongs();
  addSongs();
});

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
}

function queryDanceSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("----------------------------------------");
  });

  // logs the actual query being run

  console.log(query.sql);
}


function queryClassicRock() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Classic Rock"], function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("------------------------------------------");

  });

  console.log(query.sql);
}

function addSongs() {
  console.log("Inserting Songs....\n");
  var query = connection.query(
    // QUERY IS THE STRING BELOW
    "INSERT INTO songs SET ?",
    {
      title:"Love Never Felt So Good",
      artist: "Michael Jackson",
      genre: "pop"
    },
    function (err, res) {
      console.log(res.affectedRows + " song inserted!\n");

      updateSongs();
    }
  );
  console.log(query.sql);
}

function updateSongs() {
  console.log("updating Songs....\n");
  var query = connection.query(
    "UPDATE songs SET ? WHERE ?",
    [
      {
        title: "TRNDSTTR"
      },
      {
        artist: "Black Coast"
      },
      {
        genre: "Dance"
      }
    ],
    function (err, res) {
      console.log(res.affectedRows + " songs updated!\n");

      deleteSong();
    }
  );

  console.log(query.sql);
}

function deleteSong() {
  console.log("Deleting selected song....\n");
  connection.query(
    "DELETE FROM songs WHERE ?",
   
    {
      title: "TRNDSTTR"
    },
    function (err, res) {
      console.log(res.affectedRows + " songs deleted\n");

      readSongs();
    }
  );
}

function readSongs() {
  console.log("Selecting all songs...\n");
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;

    console.log(res);
    connection.end();
  });
}
