const dotenv = require("dotenv");
const mysql2 = require("mysql2");

dotenv.config();
// OLD CONFIGURATION WITHOUT THE ENV
// const mysqlConnection = mysql2.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Ls03@1234",
//   database: "inventory",
// });
// const cors = require("cors")

const pingInterval = 60000; // 1 minute interval (in milliseconds)
const pingTimer = setInterval(() => {
  mysqlConnection.ping((err) => {
    if (err) {
      console.error("Error pinging MySQL server:", err);
    } else {
      console.log("MySQL server pinged successfully");
    }
  });
}, pingInterval);

const mysqlConnection = mysql2.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

// let connection = mysqlConnection.connect((err) => {
//   if (err) {
//     console.log(
//       "Failed to connect database. Error" + JSON.stringify(err, undefined, 2)
//     );
//   } else {
//     console.log("Database connected successfully");
//   }
// });

let connection = mysqlConnection.connect((err, results, fields) => {
  if (err) {
    if (err.fatal) {
      console.error("Fatal error occurred:", err);
      mysqlConnection.destroy(); // Destroy the connection
      clearInterval(pingTimer); // Stop the ping interval
    } else {
      console.error("Non-fatal error occurred:", err);
    }
  } else {
    console.log("Query executed successfully:", results);
  }
});

module.exports = mysqlConnection;
