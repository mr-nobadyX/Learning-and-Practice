 const http = require('http');


 const server = http.createServer((req, res)=>{
                res.end("Namaste world");
 })


 server.listen(8000);