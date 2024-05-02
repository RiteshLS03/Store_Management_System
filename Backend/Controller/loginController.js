const connection = require("../connection");
const asyncHandler = require("express-async-handler");

const loginUser = asyncHandler(async (req, res) => {
  //   const { email, password } = req.body;
  //   try {
  //     const response = await new Promise((resolve, reject) => {
  //       connection.query(
  //         "SELECT * FROM users WHERE values (?,?)",
  //         [email, password],
  //         (error, results) => {
  //           if (error) {
  //             reject(error);
  //           } else {
  //             resolve(results);
  //           }
  //         }
  //       );
  //     });

  //Chat GPT AI Code

  const { email, password } = req.body;
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            if (results.length === 0) {
              // User not found
              reject(new Error("User not found"));
            } else {
              const user = results[0];
              if (user.password === password) {
                // Password is correct
                resolve(user);
              } else {
                // Incorrect password
                reject(new Error("Incorrect password"));
              }
            }
          }
        }
      );
    });
    // User is registered and credentials are correct
    res.status(200).json({ message: "Login successful", user: response });
  } catch (error) {
    // Handle errors
    res
      .status(401)
      .json({ message: "Authentication failed", error: error.message });
  }
});

//     if (response.length > 0) {
//       res.status(200).json(response);
//     } else {
//       // Email doesn't exist in the database
//       // Handle accordingly, e.g., return an error response
//       res.status(404).json("Please register user!");
//     }
//   } catch (error) {
//     // Handle database query error
//   }
// });

module.exports = {
  loginUser,
};
