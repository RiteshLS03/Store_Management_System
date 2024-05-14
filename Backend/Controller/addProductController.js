// const asyncHandler = require("express-async-handler");
// const connection = require("../connection");

// const addProduct = asyncHandler(async (req, res) => {
//   const { productName, quantity, unit, price } = req.body.values;
//   try {
//     connection.query(
//       "INSERT INTO products (name, quantity, unit_type, price) VALUES (?, ?, ?, ?)",
//       [productName, quantity, unit, price],
//       (error) => {
//         if (error) {
//           res.status(400).json({
//             message: "Error",
//             error: error,
//           });
//         } else res.status(200).json({ message: "Product added successfully" });
//       }
//     );
//   } catch (error) {
//     res.status(400).json({
//       message: "Error with try",
//       error: error,
//     });
//   }
// });

// module.exports = {
//   addProduct,
// };

const asyncHandler = require("express-async-handler");
const connection = require("../connection");

const addProduct = asyncHandler(async (req, res) => {
  console.log(req.cookies);
  const { productName, quantity, unit, price } = req.body;
  try {
    // Assuming connection.query returns a promise
    connection.query(
      "INSERT INTO products (name, quantity, unit_type, price) VALUES (?, ?, ?, ?)",
      [productName, quantity, unit, price],
      (err, result) => {
        if (err) {
          res.status(400).json({
            message: "Error",
            error: err.message,
          });
        } else {
          res.status(200).json({
            message: "Product added successfully",
            // insertedId: result.insertId,
            // result: result,
          });
        }
      }
    );
    // .res.status(200)
    // .json({ message: "Product added successfully" });
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error.message, // Use error.message to get the actual error message
    });
  }
});

module.exports = {
  addProduct,
};
