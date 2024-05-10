const asyncHandler = require("express-async-handler");
const connection = require("../connection");
const jwt = require("jsonwebtoken");

const getPurchases = asyncHandler(
  async (req, res) => {
    // const token =
    //   (await req.cookies.token) || req.headers.authorization?.split(" ")[1];
    // const token = req.cookies;
    // console.log(token);
    // const token = req.cookies.token;
    // console.log(req.cookies, token);
    // console.log(req);
    // if (!token) {
    //   return res.status(401).json({ message: "Not authorized" });
    // }
    // const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    //   if (err) {
    //     // console.log(err);
    //     res.status(400).json(err);
    //   } else {
    //     return decoded;
    //   }
    // });
    // // if(decoded.err)
    // const checkId = (id) => {
    //   return new Promise((resolve, reject) => {
    //     connection.query(
    //       "SELECT * FROM users WHERE id = ?",
    //       [id],
    //       (error, results) => {
    //         if (error) {
    //           reject(error);
    //         } else {
    //           resolve(results.length > 0);
    //         }
    //       }
    //     );
    //   });
    // };
    // const data = await checkId(decoded.id);
    // // console.log(data);
    // if (data) {
    try {
      // checkId(data.id);
      connection.query("SELECT * FROM products", [], (error, result) => {
        if (error) {
          res.status(500).json({ error: "Something went wrong" });
        } else {
          res.status(200).json(result);
        }
      });
    } catch (error) {
      // if (error instanceof jwt.JsonWebTokenError) {
      //   return res.status(401).json({ message: "Invalid token" });
      // }
      // if (error instanceof jwt.TokenExpiredError) {
      //   return res.status(401).json({ message: "Token expired" });
      // }
      // Handle other JWT errors or unexpected errors here
      // console.error("JWT Error:", error);
      // return res.status(500).json({ error: "Internal server error" });
      res.json(error);
    }
  }
  // else res.status(400).json({ error: "Not authorized" });
  //

  // const decoded = () => {
  //   return jwt.verify(token, process.env.JWT_SECRET);
  // };
  // console.log(decoded.id);
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
);

module.exports = getPurchases;
