const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { body } = require('express-validator');

// Signup route with validation
router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Email is invalid'),
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  authController.signup
);

module.exports = router;
