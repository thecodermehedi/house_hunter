const User = require("../../models/User");

const addUser = async (req, res) => {
  try {
    const data = await User.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
}

module.exports = addUser;