// config/database.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true, // Not needed for newer versions
      // useFindAndModify: false, // Not needed for newer versions
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;