const makeToken = require("../../utils/makeToken");

const getToken = async (req, res) => {
  try {
    const token = makeToken(req.body.email);
    res.send({success: true, token});
  } catch (error) {
    res.json({message: error.message, success: false});
  }
};

module.exports = getToken;