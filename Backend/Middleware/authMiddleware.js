const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
// const User = require("../Models/userModel");
const connection = require("../connection");

const findByEmail = (email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0] || null);
        }
      }
    );
  });
};

const protect = asyncHandler(async (req, res, next) => {
  try {
    const email = req.body.email;
    const token = req.cookies.token;
    if (!token) {
      res.status(401).json({ error: "Not authorized, please login" });
    }
    // Verify the token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // Get user id from the token
    const user = await findByEmail(email);
    console.log(user);
    if (user) {
      req.user = user;
      next();
    }
    // Fetch the user using sequilize
  } catch (error) {
    res.status(401).json({ error: "Not authorized, please login" });
  }
});

module.exports = protect;
