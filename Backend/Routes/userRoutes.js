const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controller/userController");
const { loginUser } = require("../Controller/loginController");
const { logoutUser } = require("../Controller/logoutController");
const { getUser } = require("../Controller/getUserController");
const protect = require("../Middleware/authMiddleware");
const { addProduct } = require("../Controller/addProductController");
const getPurchases = require("../Controller/getPurchasesController");
const issueProduct = require("../Controller/issueProductController");
const getIssuedData = require("../Controller/getIssueController");

// Routes that can hit upon
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/getuser", protect, getUser);
router.post("/addproduct", protect, addProduct);
router.get("/purchases", getPurchases);
router.post("/issueProduct", issueProduct);
router.get("/getIssuedData", getIssuedData);

module.exports = router;
