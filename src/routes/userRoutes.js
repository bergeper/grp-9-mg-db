const express = require("express");
const {
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

// Create Routes

router.get("/", getUserById);
router.post("/", createUser);
router.put("/:userID", updateUser);
router.delete("/:userID", deleteUser);

module.exports = router;
