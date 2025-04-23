const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String, // In production, always hash passwords!
});

module.exports = mongoose.model('User', userSchema);
