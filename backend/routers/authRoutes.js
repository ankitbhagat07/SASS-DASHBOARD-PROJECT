const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/authController");
const validate = require("../middleware/validateMiddleware");
const { createUserSchema } = require("../validators/userValidator");

router.post("/signup", validate(createUserSchema), signup);

module.exports = router;
