const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controller/userController");
const { loginUser } = require("../Controller/loginController");

// const registerUser = () => {};

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
