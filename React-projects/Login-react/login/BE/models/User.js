const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Added unique constraint for email
  password: { type: String, required: true },
  // Other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
