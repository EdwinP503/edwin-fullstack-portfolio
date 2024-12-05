const express = require('express');
const router = express.Router();
const PortfolioItem = require('../models/PortfolioItem'); // Import the model

// POST route to add a portfolio item
router.post('/add', async (req, res) => {
    try {
      const { title, description, skills, link } = req.body;
  
      if (!title || !description || !skills || !link) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      // Mock successful response
      res.status(201).json({ message: 'Portfolio item added successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;
