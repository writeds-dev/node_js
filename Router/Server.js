"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Transaction_1 = require("./Transaction");
var Account_1 = require("./Account");
var app = express();
app.use("/module1", Transaction_1.default);
app.use("/module2", Account_1.default);
app.listen(8080, function () {
    console.log("server is started");
});
