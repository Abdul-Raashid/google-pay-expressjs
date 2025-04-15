// services/userService.js
const User = require('../models/User');

exports.createUser = async (userData) => {
  return await User.create(userData);
};

exports.getUserById = async (userId) => {
  return await User.findOne({ userId });
};

// Add other user-related service methods