var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(request, response) {
    console.log(request.url);
    /*if(request.url.indexOf("view") != -1) {
    	filePath = "view.html";
    }

    fs.readFile(filePath, function(error, content) {
        if (error) {
            response.writeHead(500);
            response.end();
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
        }
    });

    path.exists(filePath, function(exists) {
        if (exists) {
            fs.readFile(filePath, function(error, content) {
                if (error) {
                    response.writeHead(500);
                    response.end();
                }
                else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                }
            });
        }
        else {
            response.writeHead(404);
            response.end();
        }
    });*/
}).listen(8888);

