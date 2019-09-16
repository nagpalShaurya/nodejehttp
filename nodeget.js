//10.100.16.99/user
//10.100.16.99/order


const http = require("http")
var url = require("url")

// access to the request
var server = http.createServer((req,res) => {

    var pathname = url.parse(req.url).pathname;

//    if(pathname === "/user")
    if(req.url === "/user")
    {
    res.setHeader('content-type','application/json')
    res.end('hello user')
    console.log(req.url)
    }
    else if(pathname === "/order")
    {
        res.setHeader('content-type','application/json')
        res.end('hello orders')        
    }
})

server.listen(4000,'127.0.0.1'); 
