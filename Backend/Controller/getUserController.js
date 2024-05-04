const asyncHandler = require("express-async-handler");
const connection = require("../connection");

const getUser = asyncHandler(async (req, res) => {
  const emailAdd = req.body.email;

  const data = await new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM users WHERE email = ?",
      [emailAdd],
      (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0] || null);
        }
      }
    );
  });
  const { id, name, email } = data;
  res.send({ id, name, email });
});

module.exports = {
  getUser,
};
