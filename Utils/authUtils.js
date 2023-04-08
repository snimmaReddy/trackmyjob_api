const express = require("express");
const jwt = require("jsonwebtoken");

exports.generateAccessToken = (user) => {
  const jsonData = { email: user.email, password: user.password };
  return jwt.sign(jsonData, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
};
