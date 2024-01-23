const {model, Schema} = require("../utils/mongoose");

const UserSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  phone: {type: String, required: true},
  role: {type: String, required: true},
});

const User = model("User", UserSchema);

module.exports = User;
