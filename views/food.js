var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var nameSchema = new Schema({
    Address: String,
    cust: String,
    vs: String,
    cs: String,
    wp: String,
    rp: String,
    Address: String,
    State: String,
    Pincode:Number,
    Time: String
  })

  var Info = mongoose.model("Information2", nameSchema);

  module.exports = Info;