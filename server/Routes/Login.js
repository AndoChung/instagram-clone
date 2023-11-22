const express = require("express");
const router = express.Router();


const LoginController = require("../Controller/LoginController");

router.get("/", LoginController.get);

module.exports = router;