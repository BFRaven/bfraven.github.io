// variables for app
var cities = ["berlin","paris", "prague","barcelona","new york","tokyo"];
var uInput;
var btnDisplay = $("#cityBtnDisplay");
var newcityBtn = $("<button>");
var cityCount = 0;

// Function to create buttons for existing cities and for user to create new buttons
//with parameters "name" and "count"
function mkBtn(name, count) {
    var mkDisplayBtn = $("<button>");
    mkDisplayBtn.append("" + name)
        .addClass("btn btn-outline-dark btn-sm gifBtn")
        .attr("data-city", name)
        .attr("id", "item-" + count);
    // Append those new buttons to the button display section of HTML
    btnDisplay.append(mkDisplayBtn);
    cityCount++;
};

// Function to create buttons for pre-defined cities in array
function initialDisplay() {
    for(var i=0; i<cities.length; i++) {
        mkBtn(cities[i], cityCount);
    };
};


// var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=rLV62Ly5BOBAjj94hICcYhdSp5and0D9&q=" +
// city + "&limit=10&offset=0&rating=G&lang=en";

// $("button").on("click", function() {
//     // Grabbing and storing the data-animal property value from the button
//     var city = $(this).attr("data-city");

//     // Constructing a queryURL using the animal name
//     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=rLV62Ly5BOBAjj94hICcYhdSp5and0D9&q=" +
//       city + "&limit=10&offset=0&rating=G&lang=en";

//     // Performing an AJAX request with the queryURL
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       // After data comes back from the request
//       .then(function(response) {
//         console.log(queryURL);

//         console.log(response);
//         // storing the data from the AJAX request in the results variable
//         var results = response.data;

//         // Looping through each result item
//         for (var i = 0; i < results.length; i++) {

//           // Creating and storing a div tag
//           var cityDiv = $("<div>");

//           // Creating a paragraph tag with the result item's rating
//           var p = $("<p>").text("Rating: " + results[i].rating);

//           // Creating and storing an image tag
//           var cityImage = $("<img>");
//           // Setting the src attribute of the image to a property pulled off the result item
//           cityImage.attr("src", results[i].images.fixed_height.url);

//           // Appending the paragraph and image tag to the animalDiv
//           cityDiv.append(p);
//           cityDiv.append(cityImage);

//           // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
//           $("#gifs-appear-here").prepend(cityDiv);
//         }
//       });
//   });