const express = require("express");

const checkUserExist = require("../middlewares/checkUserExist");
const { signin, logout } = require("../controllers/authControllers");

const router = express.Router();

router.post("/signin", checkUserExist, signin);
router.get("/logout", logout);

module.exports = router;
