// let express = require("express");

// let app = express();

// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ message: "it is default parameter in the rest services " });
// });

// app.get("/demo", (req, res) => {
//   res.status(200).json({ message: "demo pratice the part2 " });
// });

// app.post("/", (req, res) => {
//   res
//     .status(200)
//     .json({ message: "post request will come from the mongodb soon....." });
// });
// app.post("/demo", (req, res) => {
//   res.status(200).json({ message: "this is the reques 4.......!" });
// });

// app.listen(8080, () => {
//   console.log("server is started  ");
// });

let express = require("express");

let app2 = express();

app2.get("./", (req, res) => {
  res.status(200).json({ message: "this is fine" });
});

app2.post("./",(req,res)=>{
  res.status(200).json({"message":"this is app2"})
})


app2.listen(8080)
console.log("server 2 is started ")