// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Add other user-related fields as needed
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);