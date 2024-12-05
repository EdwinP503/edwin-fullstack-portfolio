const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const portfolioRoutes = require('./routes/portfolioRoutes');

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Backend server is running.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use('/api/portfolio', portfolioRoutes);