// const connection = require("../connection");
// const bcryptjs = require("bcryptjs");
// const asyncHandler = require("express-async-handler");
// const jwt = require("jsonwebtoken");

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "2h" });
// };

// const loginUser = asyncHandler(async (req, res) => {
//   //  AI Code

//   const { email, password } = req.body;
//   try {
//     const response = await new Promise((resolve, reject) => {
//       connection.query(
//         "SELECT * FROM users WHERE email = ?",
//         [email],
//         (error, results) => {
//           if (error) {
//             reject(error);
//           } else {
//             if (results.length === 0) {
//               // User not found
//               reject(new Error("User not found"));
//             } else {
//               const user = results[0];
//               const passwordMatch = bcryptjs.compare(password, user.password);
//               if (passwordMatch) {
//                 // Password is correct
//                 // Generate the JWT Token
//                 const token = generateToken(user.id);
//                 const authUser = { user, token };
//                 resolve(authUser);
//                 // console.log(authUser);
//                 // Send the HTTP-only cookie
//                 res.cookie("token", token, {
//                   path: "/",
//                   httpOnly: true,
//                   expires: new Date(Date.now() + 1000 * 7200), // 2 Hours
//                   sameSite: "none",
//                   secure: true,
//                 });
//               } else {
//                 // Incorrect password
//                 reject(new Error("Incorrect password"));
//               }
//             }
//           }
//         }
//       );
//     });
//     // User is registered and credentials are correct
//     res.status(200).json({ message: "Login successful", user: response });
//   } catch (error) {
//     // Handle errors
//     res
//       .status(401)
//       .json({ message: "Authentication failed", error: error.message });
//   }
// });

// module.exports = {
//   loginUser,
// };

const connection = require("../connection");
const bcryptjs = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "2h" });
};

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        async (error, results) => {
          if (error) {
            reject(error);
          } else {
            if (results.length === 0) {
              reject(new Error("User not found"));
            } else {
              const user = results[0];
              const passwordMatch = await bcryptjs.compare(
                password,
                user.password
              );
              if (passwordMatch) {
                const token = generateToken(user.id);
                const authUser = { user, token };
                res.cookie("token", token, {
                  path: "/",
                  httpOnly: true,
                  expires: new Date(Date.now() + 1000 * 7200), // 2 Hours
                  sameSite: "none",
                  secure: true,
                });
                resolve(authUser);
              } else {
                reject(new Error("Incorrect password"));
              }
            }
          }
        }
      );
    });
    res.status(200).json({ message: "Login successful", userInfo: response });
  } catch (error) {
    res
      .status(401)
      .json({ message: "Authentication failed", error: error.message });
  }
});

module.exports = {
  loginUser,
};
