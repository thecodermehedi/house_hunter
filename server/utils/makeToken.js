const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

const makeToken = async (email) => {
  const token = jwt.sign({email}, jwtSecret, {expiresIn: "365d"});
  return token;
};

module.exports = makeToken;
