const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const contactRoutes = require('./routes/contactRoutes');

// Initialize environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());  // Allow cross-origin requests
app.use(helmet()); // Secure HTTP headers

// Simple GET route to test the server
app.get('/', (req, res) => {
  res.send('Backend server is running.');
});

// Use the contact routes
app.use('/api/contact', contactRoutes);

// MongoDB connection
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.DB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

// Start the server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// Export the app for testing purposes
module.exports = app;