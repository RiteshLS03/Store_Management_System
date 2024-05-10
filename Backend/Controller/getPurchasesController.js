const asyncHandler = require("express-async-handler");
const connection = require("../connection");
const jwt = require("jsonwebtoken");

const getPurchases = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    // return res.status(401).json({ message: "Not authorized" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const checkId = (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM users WHERE id = ?",
        [id],
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results.length > 0);
          }
        }
      );
    });
  };
  const data = checkId(decoded.id);
  console.log(data);
  if (data) {
    try {
      // checkId()
      connection.query("SELECT * FROM products", [], (error, result) => {
        if (error) {
          res.status(500).json({ error: "Something went wrong" });
        } else {
          res.status(200).json(result);
        }
      });
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: "Invalid token" });
      }
      if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ message: "Token expired" });
      }
      // Handle other JWT errors or unexpected errors here
      console.error("JWT Error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // const decoded = () => {
  //   return jwt.verify(token, process.env.JWT_SECRET);
  // };
  console.log(decoded.id);
  // res.status(400).json(decoded);

  //  catch (error) {
  //   // Handle JWT verification errors
  //   if (error.name === "JsonWebTokenError") {
  //     return res.status(401).json({ message: "Invalid token" });
  //   } else if (error.name === "TokenExpiredError") {
  //     return res.status(401).json({ message: "Token expired" });
  //   } else {
  //     // Handle other unexpected errors
  //     console.error(error);
  //     return res.status(500).json({ error: "Internal server error" });
  //   }
  // }

  // catch (error) {

  // console.log(error);
  // }
  // if (!decoded) {

  // }
  //   const userId = decoded.id;
});

module.exports = getPurchases;
