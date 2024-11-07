"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.status(200).json({ "message": "this is node js module" });
});
app.listen(8080);
console.log("server Started");
