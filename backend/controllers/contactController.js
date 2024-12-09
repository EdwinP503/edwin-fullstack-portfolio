const Joi = require('joi');
const validator = require('validator');
const Contact = require('../models/Contact');

// Controller to get all contact form submissions
const getContactSubmissions = async (req, res) => {
  try {
    const contacts = await Contact.find();  // Retrieve all contact documents
    res.status(200).json(contacts);  // Return contacts as JSON
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
};

// Controller to submit a new contact form
const submitContactForm = async (req, res) => {
  // Validation schema with Joi
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    message: Joi.string().min(10).required(),
  });

  // Validate incoming data
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { name, email, message } = value;

  // Sanitize the data
  const sanitizedEmail = validator.normalizeEmail(email); // Normalize the email
  const sanitizedMessage = validator.escape(message); // Escape HTML from message

  try {
    const newContact = new Contact({
      name,
      email: sanitizedEmail,
      message: sanitizedMessage,
    });

    await newContact.save();  // Save the sanitized contact data to the database
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error('Error while saving contact:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

module.exports = { getContactSubmissions, submitContactForm };
