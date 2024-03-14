// const connection = require("my");
const connection = require("./connection");
const express = require("express");
const app = express();

// MIDDLEWARE
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("FROM THE BACKEND SIDE");
});

app.listen(5001, () => {
  console.log("Listening on port http://localhost:5001");
});
