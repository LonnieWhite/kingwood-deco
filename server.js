// import express from "express";
var express = require("express")
    // import bodyParser from "body-parser";
var bodyParser = require("body-parser")

// import logger from "morgan";
var logger = require("morgan")

// import mongoose from "mongoose";
var mongoose = require("mongoose")


// Require order schema/collection template
//var Order = require("./models/Order-Form");

// Create a new express app
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;


// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB configuration (Change this URL to your own DB)
// mongoose.connect("YOUR LOCAL MONGO");
// var db = mongoose.connection;

// db.on("error", function (err) {
//     console.log("Mongoose Error: ", err);
// });

// db.once("open", function () {
//     console.log("Mongoose connection successful.");
// });

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
// app.get("/api", function (req, res) {

//     // This GET request will search for the latest clickCount
//     YOUR MODEL.find({}).exec(function (err, doc) {

//         if (err) {
//             console.log(err);
//         }
//         else {
//             res.send(doc);
//         }
//     });
// });

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});