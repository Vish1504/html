var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var User = require("./info");
const internal = require("stream");

mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://vish1504:abcd@cluster0.wotzs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log("Error", err.message);
  });

var app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("plan1.ejs");
});

app.post("/info", (req, res) => {
  var myData = new Info(req.body);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.listen(3000);
