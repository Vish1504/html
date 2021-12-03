var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");

var app = express();
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/images"));
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://vish1504:<password>@cluster0.wotzs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  client.close();
});

app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.listen(process.env.PORT || 3000, process.env.ID, function (req, res) {
  console.log("Server has started  at PORT 3000");
});
