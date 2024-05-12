const asyncHandler = require("express-async-handler");
const connection = require("../connection");

const issueProduct = asyncHandler(async (req, res) => {
  //   res.send(req.body);
  const { productName, quantity, price, unit } = req.body;
  console.log(productName, quantity, price, unit);
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM products WHERE name= ?",
        [productName],
        async (error, results) => {
          if (error) {
            reject(error);
          } else {
            if (results.length === 0) {
              console.log(results);
              reject(new Error("Product not found"));
            } else {
              const product = results[0];
              console.log(product);
              if (product.quantity - quantity >= 0) {
                connection.query(
                  "INSERT INTO issue_products (name, unit_type, issue_quantity, issue_price) VALUES (?,?,?,?)",
                  [productName, unit, quantity, price],
                  (error, result) => {
                    if (error) {
                      reject(
                        new Error(
                          "Something went wrong while adding to issue product"
                        )
                      );
                    } else {
                      resolve(result);
                    }
                  }
                );
              } else {
                reject(new Error("Insufficient stock"));
              }
              //   resolve(product);
              //   console.log(product);
              //   const passwordMatch = await bcryptjs.compare(
              //     password,
              //     user.password
              //   );
              //   if (passwordMatch) {
              //     const token = generateToken(user.id);
              //     const authUser = { user, token };
              //     res.cookie("token", token, {
              //       path: "/purchases",
              //       httpOnly: true,
              //       expires: new Date(Date.now() + 1000 * 7200), // 2 Hours
              //       sameSite: "none",
              //       secure: true,
              //     });
              //     resolve(authUser);
              //   } else {
              //     reject(new Error("Incorrect password"));
              //   }
            }
          }
        }
      );
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
});

module.exports = issueProduct;
