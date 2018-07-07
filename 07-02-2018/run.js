// var music = require('./bands.js');

// console.log(music.bands);
// console.log("------------");
// console.log(music.artist);


//writeFile will create a file; readFIle will read from chosen
//file. In readFile method its important to  include "utf8" parameter or it will read stream (garbage) data
// the code will sotre the contents of reading inside the variable "data".
// var fs = require("fs");
// fs.writeFile("movies.txt", "utf8", function(err, data) {
//  if (err) {
//    return console.log(err);
//  }

//   console.log(data);
// })

var readf = require('best_things_ever.txt');

readf.readFile('best_things_ever.txt', 'utf8', function(err, data) {
 if (err) {
     return console.log(err)
 }

    console.log(data);
})