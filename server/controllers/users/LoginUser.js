const {nodeEnv} = require("../../config");
const User = require("../../models/User");
const makeToken = require("../../utils/makeToken");
const argon2 = require("argon2");

const LoginUser = async (req, res) => {
  const {email, password} = req.body;
  try {
    const isExist = await User.exists({email});
    if (!isExist) {
      return res.json({message: "User not found", success: false});
    }
    const ExistingUser = await User.findOne({email});
    const isMatched = await argon2.verify(ExistingUser.password, password);
    if (!isMatched) {
      return res.json({message: "Password is incorrect", success: false});
    }
    const token = await makeToken(email);
    const user = {
      name: ExistingUser.name,
      email: ExistingUser.email,
      phone: ExistingUser.phone,
      role: ExistingUser.role,
    };
    res.send({
      success: true,
      message: "User logged in successfully",
      user,
      token,
    });
    console.log("User logged in successfully");
  } catch (error) {
    res.json({message: error.message, success: false});
  }
};

module.exports = LoginUser;
