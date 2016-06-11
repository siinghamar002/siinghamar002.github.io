var http= require('http')
var url=require("url")

var server= http.createServer(function(req,res){
    //  res.writeHead(200,{"contentType":"text/html"})//
    var page=url.parse(req.url).pathname;
    if(page=="/login")
    {
        res.write("Requested page is login")

    }
    else if(page=="/signup")
    {
        res.write("Requested page is for signup")
    }
    else
    {
        res.write("You Have in Wrong Way Plse Select login/signup Mode")
    }

    res.end()
})
server.listen(8080)
console.log("welcome amrendra")
