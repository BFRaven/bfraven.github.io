// require/import the HTTP module
var http = require("http");

// defining a port to listen for incoming requests. Since these stay static you can use the const to create the variable.
var PORT = 7500;
var PORT1 = 7000;

// handling requests and responses using a generic function
function handleRequest(request, response) {
    response.end("You are awesome!")
}

function handleRequest1(request, response) {
    response.end("You need to do better!")
}

// use the NODE HTTP package to create our server(s) using the createServer method.
// Pass the handleRequest function to so it can be functional.
var server = http.createServer(handleRequest);

var server1 = http.createServer(handleRequest1);

// start server so that it can begin listening to client requests.
server.listen(PORT, function() {

    // Log on the server side when the server has started.
    console.log("server is listening on http://localhost PORT: " + PORT)
});

server1.listen(PORT1, function() {
    console.log("server is listening on http://localhost PORT: " + PORT1)
});