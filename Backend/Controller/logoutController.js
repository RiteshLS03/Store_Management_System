const asyncHandler = require("express-async-handler");

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0), // 2 Hours
    sameSite: "none",
    secure: true,
  });
  return res.status(200).json({ message: "successfully Logged Out" });
});

module.exports = {
  logoutUser,
};
