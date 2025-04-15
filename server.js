// server.js
const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes
app.use('/api', userRoutes);
app.use('/api', paymentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});