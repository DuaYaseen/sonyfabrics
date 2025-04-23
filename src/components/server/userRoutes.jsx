const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser && existingUser.password === password) {
      return res.status(200).json({ message: 'Login successful', user: existingUser });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
});

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    res.status(500).json({ message: 'Registration error', error: err });
  }
});

module.exports = router;
