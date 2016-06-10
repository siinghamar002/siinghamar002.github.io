var http=require('http')

var server= http.createServer(function(req,res){
	res.writeHead(200,{"contentType":"text/html"})
	var name="Amrendra"
	var dob="20th feb"
	var dept="mca"
	//res.end("<h1>Hi I am  Kumar Amrendra i m freind of balbhadra</h1>,<h2>balbhadra is a good boy</h2>,<h3>i am from bihar</h3>,<h4>i am pursuing my mca from niet</h4>")//
	res.write("name= " +
		name +"\ndob=" +
		dob +"\ndept=" +
		dept )
		
	res.end()
})

server.listen(8080)