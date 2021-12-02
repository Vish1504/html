var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var nameSchema = new Schema({
    Address: String,
    State: String,
    Pincode: Number,
    Time: String,
    Address2: String,
    State2: String,
    Pincode2: Number,
    Time2: String,
    Address3: String,
    State3: String,
    Pincode3: Number,
    Time3: String
  })

  var Info = mongoose.model("Information", nameSchema);

  module.exports = Info;