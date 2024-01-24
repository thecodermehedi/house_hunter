const logoutUser = async (req, res) => {
  try {
    res
      .clearCookie("jwt", {
        maxAge: 0,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({message: "User logged out successfully", success: true});
    console.log("User logged out successfully");
  } catch (error) {
    res.status(500).json({message: error.message, success: false});
  }
};

module.exports = logoutUser;