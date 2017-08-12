//Import Dependencies
const express = require("express")
const app = express();

const bodyParser = require("body-parser")

const logger = require("morgan")
const mongoose = require("mongoose")

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(process.cwd() + "/public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Require order schema/collection template
//var Order = require("./models/Order-Form");

// MongoDB configuration (Change this URL to your own DB)
// mongoose.connect("YOUR LOCAL MONGO");
// var db = mongoose.connection;

// db.on("error", function (err) {
//     console.log("Mongoose Error: ", err);
// });

// db.once("open", function () {
//     console.log("Mongoose connection successful.");
// });

var routes = require("./controllers/routeController.js");
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});