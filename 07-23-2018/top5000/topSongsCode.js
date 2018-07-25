var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "top_5000"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer.prompt({
        name: "songOrArtist",
        type: "list",
        message: "Would you like to search by SONG or by ARTIST this time?",
        choices: ["SONG", "ARTIST"]
    }).then(function (answer) {
        if (answer.songOrArtist) {
            searchBySong();
        }
        else {
            searchByArtist();
        }
    });
}

function searchBySong() {
    inquirer.prompt([
        {
            name: "song",
            type: "input",
            message: "Which song would you like to search?"

        }

    ]).then(function (answer) {
        connection.query("SELECT * FROM Top5000 WHERE ?",

            [
                {
                    song: answer.song
                }
            ],
            function (err, res) {
                if (err) throw err;

                var choiceArr = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArr.push(res[i].song);
                    console.log("\nPosition: " + res[i].position + " | " + "Artist: " + res[i].artist + " | " + "Song: " + res[i].song + " | " + "Year: " + res[i].year + " | " + "Total revenue made: " + res[i].raw_total);

                }

                return choiceArr;
            })
    })
}

function searchByArtist() {
    inquirer.prompt([
        {
            name: "artist",
            type: "input",
            message: "Which artist would you like to search?"
        }
    ]).then(function (answer) {
        connection.query("SELECT * FROM TOP5000 WHERE ?",
            [
                {
                    artist: answer.artist
                }
            ],
            function (err, res) {
                if (err) throw err;

                var artistArr = [];
                for (var i = 0; i < res.length; i++) {
                    artistArr.push(res[i].artist);
                    console.log("HERE ARE THE TOP SONGS OF THE ARTIST YOU SEARCHED!");
                    console.log("\nSongs: " + res[i].song + " | " + "Year: " + res[i].year + "\n");
               }
            }
        )
        }
    )}

    
        