const asyncHandler = require("express-async-handler");

const addProduct = asyncHandler(async (req, res) => {
  res.status(200).json("Let's add product to the database");
});

module.exports = {
  addProduct,
};
