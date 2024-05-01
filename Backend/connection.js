require("dotenv").config();
const mysql2 = require("mysql2");

// OLD CONFIGURATION WITHOUT THE ENV
// const mysqlConnection = mysql2.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Ls03@1234",
//   database: "inventory",
// });
const cors = require("cors");

const mysqlConnection = mysql2.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

let connection = mysqlConnection.connect((err) => {
  if (err) {
    console.log(
      "Failed to connect database. Error" + JSON.stringify(err, undefined, 2)
    );
  } else {
    console.log("Database connected successfully");
  }
});
module.exports = mysqlConnection;
