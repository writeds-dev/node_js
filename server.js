// let http =require("http")

// let server= http.createServer((req,res)=>{
//     res.write("http server is running")
//     res.end()

// })
// server.listen(8080);
// console.log("server is listning at port number 8080")


let http=require("http")
let url=require("url")

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  let obj = url.parse(req.url, true).query;

  if (obj.uname === "ashok" && obj.upwd === "dev2") {
    res.write("login succesfull");
  } else {
    res.write("login failed");
    
  }
  res.end();
});
server.listen(8080);
console.log("this server is listing at the port of 8080")