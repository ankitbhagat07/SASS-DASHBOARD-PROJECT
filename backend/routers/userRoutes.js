const express = require("express");
const router = express.Router();
const {
  createUser,
  getUserById,
  getUsers,
} = require("../controllers/userController");
const validate = require("../middleware/validateMiddleware");
const { createUserSchema } = require("../validators/userValidator");

router.post("/", validate(createUserSchema), createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);

module.exports = router;
