const asyncHandler = require("express-async-handler");
const connection = require("../connection");

const getIssuedData = asyncHandler(async (req, res) => {
  // const { id } = req.params;
  try {
    connection.query("SELECT * FROM issue_products", [], (error, results) => {
      if (error) {
        res.send({ error: error });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = getIssuedData;
