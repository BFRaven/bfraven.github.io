var http = require("http");

var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    // _dirname allows to pull files from a directory living anywhere in our computer
    fs.readFile(__dirname + "/index.html", function(err, data) {
        
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end(data);
    });
}

server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
})