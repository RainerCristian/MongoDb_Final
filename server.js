const express = require("express");
const app = express.Router();
import mongoose from "mongoose";
const mongoose =require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res, next) {
    res.send("express is working");
})

//app.post

app.listen(3000, function() {
    console.log("server is running on 3000");
})

module.exports = app;