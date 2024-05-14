const express = require("express");
const app = express();
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
// const User = require("../Models/userModel");
const connection = require("../connection");
// const { cookie } = require("express-validator");
const cookieParser = require("cookie-parser");

// MIDDLEWARE
app.use(cookieParser());

const findByEmail = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM users WHERE id = ?",
      [id],
      (error, results) => {
        console.log(id);

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
  // console.log(req.cookies);
  // const authHeader = req.headers["authorization"];
  // console.log(authHeader);
  try {
    // const email = req.body.email;
    console.log(req.cookies);
    const token = req.cookies.token;
    if (!token) {
      res.status(401).json({ error: "Session expired, please login" });
    }
    // Verify the token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verified, new Date(verified.iat), new Date(verified.exp));
    // Get user id from the token
    const user = await findByEmail(verified?.id);
    if (!user) {
      return res.status(401).json({ error: "Not authorized, please login" });
    }
    next();
    // if (user) {
    //   req.user = user;
    //   next();
    // }
    return;
    // Fetch the user using sequilize
  } catch (error) {
    res.status(401).json({ error: "Not authorized, please login" });
  }
});

module.exports = protect;
