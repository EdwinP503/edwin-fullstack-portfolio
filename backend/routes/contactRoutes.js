const express = require('express');
const router = express.Router();
const { getContactSubmissions, submitContactForm } = require('../controllers/contactController');

// GET route to retrieve all contact form submissions
router.get('/submissions', getContactSubmissions);

// POST route to submit a new contact form
router.post('/submit', submitContactForm);

module.exports = router;
