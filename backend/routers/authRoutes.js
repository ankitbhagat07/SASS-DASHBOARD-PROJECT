const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const validate = require("../middleware/validateMiddleware");
const {
  createUserSchema,
  loginSchema,
} = require("../validators/userValidator");

router.post("/signup", validate(createUserSchema), signup);
router.post("/login", validate(loginSchema), login);

module.exports = router;
