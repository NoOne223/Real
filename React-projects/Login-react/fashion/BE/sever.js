const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to the database
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Mount the authRoutes middleware at the /api/auth URL prefix
app.use('/api/auth', authRoutes);

// Mount the userRoutes middleware at the /api/users URL prefix
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
