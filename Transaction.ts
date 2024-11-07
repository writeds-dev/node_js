import * as express from "express"

let Transaction:any=express.Router()

Transaction.get("/",(req:any,res:any)=>{
    res.status(200).json({"message":"this is trasaction part in submodule"});    
});

Transaction.get("/new",(req:any,res:any)=>{
    res.status(200).json({"message":"this is transaction in post rest api"})
});


export default Transaction;
