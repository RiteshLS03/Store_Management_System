const express = require("express");
const router = express.Router();
const cors = require("cors");
const { registerUser } = require("../Controller/userController");

// const registerUser = () => {};

router.post("/register", registerUser);

module.exports = router;
