"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Account = express.Router();
Account.get("/", function (req, res) {
    res.status(200).json({ "message": "this is account server the get request" });
});
Account.post("/", function (res, req) {
    res.status(200).json({ "message": "server account post method" });
});
exports.default = Account;
