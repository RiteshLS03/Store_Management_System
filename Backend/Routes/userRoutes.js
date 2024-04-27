const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controller/userController");

// const registerUser = () => {};

router.post("/register", registerUser);

module.exports = router;
