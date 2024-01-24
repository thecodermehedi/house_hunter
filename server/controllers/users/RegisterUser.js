const User = require("../../models/User");
const argon2 = require('argon2');

const RegisterUser = async (req, res) => {
  const newUser = req.body;
  try {
    const hashedPassword = await argon2.hash(newUser.password);
    newUser.password = hashedPassword;
    await User.create(newUser);
    res.status(201).json({message: "User created successfully", success: true});
  } catch (error) {
    res.status(500).json({message: error.message, success: false});
  }
};

module.exports = RegisterUser;
