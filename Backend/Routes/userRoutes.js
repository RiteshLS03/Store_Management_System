const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controller/userController");
const { loginUser } = require("../Controller/loginController");
const { logoutUser } = require("../Controller/logoutController");
const { getUser } = require("../Controller/getUserController");
const protect = require("../Middleware/authMiddleware");

// const registerUser = () => {};
// Routes that can hit upon
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
// router.get("/getuser", protect, getUser);

module.exports = router;
