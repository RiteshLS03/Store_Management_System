const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const connection = require("../connection");
const { use } = require("../Routes/userRoutes");

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      res.status(400).json("Please fill in all required fields");
    } else if (password.length < 6) {
      res.status(400).json("Minimum 6 characters are required");
    }
    //Check if user email already exists
    function checkUser(email) {
      connection.query("")
    }
    const userExists = 
    if (userExists) {
      res.status(400).json("Email has already been registered");
    }
    if (!userExists) {
      connection.query(
        "INSERT INTO users (name,email,password) VALUES (?,?,?)",
        [name, email, password],
        (err, data) => {
          if (err) {
            if (err.errno == 1062) {
              res.status(409).json({ error: "User already exists" });
            } else {
              // ("Database error:" err.message);
              res.status(500).json({ error: "Something went wrong" });
            }
          } else {
            res.status(201).json({ message: "User added successfully" });
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  registerUser,
};
