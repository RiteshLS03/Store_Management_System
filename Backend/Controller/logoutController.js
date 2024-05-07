const asyncHandler = require("express-async-handler");

const logoutUser = asyncHandler(async (req, res) => {
  return res
    .cookie("token", "", {
      path: "/",
      httpOnly: true,
      expires: new Date(0), // 2 Hours
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json({ message: "successfully Logged Out" });
});

module.exports = {
  logoutUser,
};
