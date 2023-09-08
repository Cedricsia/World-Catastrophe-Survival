const express = require("express");

const router = express.Router();

const bookedTrainingControllers = require("../controllers/bookedTrainingControllers");

router.get("/", bookedTrainingControllers.browse);

router.get("/:id", bookedTrainingControllers.read);

router.post("/new", bookedTrainingControllers.book);

module.exports = router;
