const {model, Schema} = require("../utils/mongoose");

const GeocodeSchema = new Schema({
  name: {type: String, required: true},
  dial_code: {type: String, required: true},
  code: {type: String, required: true},
  flag: {type: String, required: true},
});

const Geocode = model("Geocode", GeocodeSchema);

module.exports = Geocode;