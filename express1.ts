import * as express from "express";

let app:any=express();


app.get("/",(req:any,res:any)=>{
    res.status(200).json({"message":"this is node js module"})
})
app.listen(8080);
console.log("server Started");