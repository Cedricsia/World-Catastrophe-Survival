const express = require("express");

const checkUserExist = require("../middlewares/checkUserExist");
const { signin } = require("../controllers/authControllers");
const router = express.Router();

router.post("/login", checkUserExist, signin);

module.exports = router;
