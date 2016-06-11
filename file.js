var http= require('http')

var server= http.createServer(function(req,res){
    res.writeHead(200,{"contentType":"text/html"})
})
    server.on('close',function () {
        console.log("server Stop")
    })

server.listen(8080);
server.close();
