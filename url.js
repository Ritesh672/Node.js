// the code will help to collec the url from the user and read those data that user enter

var http = require("http");
var url = require("url");

http.createServer(function(req, res)
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    var q = url.parse( req.url , true).query;

    var text= q.month + " " + q.year ;

    res.end(text);
}).listen(8080);