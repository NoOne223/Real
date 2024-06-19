const User = require('../models/User');
const bcrypt = require('bcryptjs'); // Add bcrypt for hashing passwords
const { body, validationResult } = require('express-validator'); // Add express-validator for validation

exports.signup = async (req, res) => {
  // Validate request body
  await body('email').isEmail().run(req);
  await body('username').isLength({ min: 3 }).run(req);
  await body('password').isLength({ min: 6 }).run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, username, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance using the request body
    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    console.log('New user created:', newUser);

    // Respond with the created user object (excluding sensitive info)
    const { _id, role } = newUser;
    res.status(201).json({ _id, email, username, role });
  } catch (error) {
    console.error('Error creating user:', error);
    // Respond with an error if user creation fails
    res.status(500).json({ error: 'Unable to create user' });
  }
};
