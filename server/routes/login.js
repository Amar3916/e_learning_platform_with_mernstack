const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const router = express.Router();

// Login endpoint
router.post('/', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ success: false, message: 'Invalid username' });
      }
  
      // Directly compare password
      if (password !== user.password) {
        return res.status(400).json({ success: false, message: 'Invalid password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, 'mySuperSecretKey', { expiresIn: '1h' });

      res.status(200).json({
        success: true,
        message: 'Successfully logged in',
        token,
        redirectUrl: '/profile'
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });
  
module.exports = router;
