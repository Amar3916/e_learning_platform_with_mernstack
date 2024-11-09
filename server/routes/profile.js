const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../model/user');  // Assuming your user model is in server/model/user.js
const router = express.Router();

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from Authorization header
  if (!token) return res.status(401).json({ message: 'Access denied, no token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = decoded;  // Attach the user data to request
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Profile route - GET user profile data
router.get('/profile', verifyToken, async (req, res) => {
  try {
    // Find the user by ID (from JWT payload)
    const user = await User.findById(req.user.userId); 
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Send the user data
    res.json({ user: { fullname: user.username, email: user.email, profile: user.profile || {} } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Profile route - Update user profile data
router.post('/profile', verifyToken, async (req, res) => {
  try {
    const { phone, interests, bio } = req.body;

    // Find the user by ID (from JWT payload)
    const user = await User.findById(req.user.userId); 
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Update profile fields
    user.profile = { phone, interests, bio };
    await user.save();

    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
