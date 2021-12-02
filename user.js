var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var nameSchema = new Schema({
    fname: String,
    femail: String,
    fpass: String,
    fphn: String
  })

  var Info = mongoose.model("Users", nameSchema);

  module.exports = Info;