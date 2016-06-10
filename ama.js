var http= require('http')

var server= http.createServer(function(req,res){
res.writeHead(200,{"contentType":"text/html"})
res.write("<html><head><title>log in</title></head><center><form method='post' style='height:300px;width:400px;border:1px solid yellow;background-Color:cyan'><body><h1>User Login</h1>"+"Email<input type='text' name='email'/><br/><br/>"+
					"Password<input type='password' name='pass'><br/><br/>"+
					"<Button type='submit' style='color:black'>submit</Button></form></body></html>")
res.end()
})
server.listen(8080)
console.log("welcome amrendra")
