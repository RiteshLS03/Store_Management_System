// const asyncHandler = require("express-async-handler");
// const User = require("../Models/userModel");
// const connection = require("../connection");
// // const { use } = require("../Routes/userRoutes");

// const registerUser = asyncHandler(async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     // Validation
//     if (!name || !email || !password) {
//       res.status(400).json("Please fill in all required fields");
//     } else if (password.length < 6) {
//       res.status(400).json("Minimum 6 characters are required");
//     }

//     const checkUser = (email) => {
//       return new Promise((resolve, reject) => {
//         connection.query(
//           "SELECT * FROM users WHERE email = ?",
//           [email],
//           (error, results) => {
//             if (error) {
//               reject(error);
//             } else {
//               resolve(results.length > 0);
//             }
//           }
//         );
//       });
//     };

//     const createUser = async (name, email, password) => {
//       try {
//         const userExists = await checkUser(email);
//         if (userExists) {
//           res.status(400).json("Email has already been registered!");
//         } else {
//           connection.query(
//             "INSERT INTO users (name,email,password) VALUES (?,?,?)",
//             [name, email, password]
//           );
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     const userExists = await checkUser(email);
//     if (!userExists) {
//       createUser(name, email, password);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

// module.exports = {
//   registerUser,
// };

const asyncHandler = require("express-async-handler");
const connection = require("../connection");
const { isEmail } = require("validator");

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Validation
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Please fill in all required fields" });
    } else if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Minimum 6 characters are required in password" });
    } else if (!isEmail(email)) {
      return res
        .status(400)
        .json({ error: "Please enter valid email address" });
    } else {
    }

    const checkUser = (email) => {
      return new Promise((resolve, reject) => {
        connection.query(
          "SELECT * FROM users WHERE email = ?",
          [email],
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
    const createUser = async (name, email, password) => {
      try {
        connection.query(
          "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
          [name, email, password]
        );
        res.status(201).json({ message: "User registered successfully" });
      } catch (error) {
        if (error.errno === 1062) {
          res.status(409).json({ error: "User already exists" });
        } else {
          res.status(500).json({ error: "Something went wrong" });
        }
      }
    };
    const userExists = await checkUser(email);
    // res.json(userExists).send(); // sended false if the email is not registered
    if (userExists) {
      res.status(400).json({ error: "Email has already been registered" });
    } else {
      await createUser(name, email, password);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = {
  registerUser,
};

// const asyncHandler = require("express-async-handler");
// const connection = require("../connection");
