// const connection = require("my");
const connection = require("./connection");
const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
// const cors = require("cors");
const userRoute = require("./Routes/userRoutes");
const errorHandler = require("./Middleware/errorMiddleware");
app.use(cors());

//Error Middleware
app.use(errorHandler);
// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes Middleware
app.use("/api/users", userRoute);

// Routes
app.get("/", (req, res) => {
  return res.json("FROM THE BACKEND SIDE");
});

app.post("/new", (req, res) => {
  const { name, email, password } = req.body;

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

  // return res.send(password);
});

app.listen(5001, () => {
  console.log("Listening on port http://localhost:5001");
});
