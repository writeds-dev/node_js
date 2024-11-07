"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Transaction = express.Router();
Transaction.get("/", function (req, res) {
    res.status(200).json({ "message": "this is trasaction part in submodule" });
});
Transaction.get("/new", function (req, res) {
    res.status(200).json({ "message": "this is transaction in post rest api" });
});
exports.default = Transaction;
