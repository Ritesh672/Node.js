// using the module to build the server


var http = require('http');

http.createServer( function(req, res)
{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("Hello");
    res.end();
}).listen(8080);