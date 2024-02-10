// lets get the own module included

var dt = require('./createmodule'); // get hold of the module to be included in the code

var http = require('http');

http.createServer( function(req , res)
{
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write("this is my own module and it will return Date and Time" + dt.myDateTime());

    res.end();
}).listen(8080);