const express = require("express");
const router = express.Router();
const { createUser, deleteUser } = require("./userController");

router.post("/users", createUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
