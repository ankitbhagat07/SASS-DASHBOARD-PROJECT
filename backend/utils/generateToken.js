const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "15m", // Short-lived access token: refresh tokens come in Day 3
  });
};

module.exports = generateToken;
