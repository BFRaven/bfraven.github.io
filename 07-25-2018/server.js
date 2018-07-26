var http = require("http");

// defining a port to listen for incoming requests. Since these stay static you can use the const to create the variable.
var PORT = 7500;

// handling requests and responses using a generic function
function handleRequest(req, res) {

    var path = req.url;

    switch (path) {
        case "/home":
        return displayRoot(path, req, res);

        case "/foods":
        return displayPortfolio(path, req, res);

        case "/movies":
        return displayRoot(path, req, res);

        case "/frameworks":
        return displayRoot(path, req, res);

        default:
        return display404(path, req, res);
    }

}

function displayPortfolio(url, req, res) {
    var myHtml = "<html>" + "<body><h1>My Portfolio</h1>" +
    "<a href ='/portfolio' >Go Home</a>" + "</body></html>";

    res.writeHead(200, { "Content-Type": "text/html"});
   
    response.end(myHtml);


}

function displayRoot(url, req, res) {
    var myHtml = "<html>" + "<body><h1>Home Page</h1>" +
    "<a href ='/portfolio' >Portfolio</a>" + "</body></html>";

    res.writeHead(200, { "Content-Type": "text/html"});
   
    response.end(myHtml);


}

function display404(url, req, res) {
    var myHtml = "<html>" + "<body><h1>404 NOT FOUND</h1>" +
    "<p>The Page you are looking for: "+ url + "cannot be found </p>" + "</body></html>";

    res.writeHead(404, { "Content-Type": "text/html"});
   
    response.end(myHtml);


}



// function handleRequest1(request, response) {
//     response.end("You need to do better!")
// }

// use the NODE HTTP package to create our server(s) using the createServer method.
// Pass the handleRequest function to so it can be functional.
var server = http.createServer(handleRequest);


// start server so that it can begin listening to client requests.
server.listen(PORT, function() {

    // Log on the server side when the server has started.
    console.log("server is listening on http://localhost PORT: " + PORT)
});

