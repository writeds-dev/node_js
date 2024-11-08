import * as express from "express";

let Account: any = express.Router();

Account.get("/", (req: any, res: any) => {
  res.status(200).json({ message: "this is account server the get request" });
});

Account.post("/", (res: any, req: any) => {
  res.status(200).json({ message: "server account post method" });
});

export default Account;
