var http = require("http");

http.CreateServer(function(request,response)
{
	response.writeHead(200,{'content-type':'text/plain'});
	response.end("Hello World!\n")
}).listen(8888);

console.log('server running at http://127.0.0.1:8888/');