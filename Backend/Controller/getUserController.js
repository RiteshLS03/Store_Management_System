const asyncHandler = require("express-async-handler");

const getUser = asyncHandler(async (req, res) => {
  res.status(200).json("Here is the info of the user");
});

module.exports = {
  getUser,
};
