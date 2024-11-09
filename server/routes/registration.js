const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../model/user');  // Assuming you have a User model
const router = express.Router();

// Registration endpoint
router.post('/', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // Create a new user
    const newUser = new User({
      username,
      email,
      password
    });

    // Save the user
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
