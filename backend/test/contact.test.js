const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');

// Increase Jest timeout
jest.setTimeout(20000); // Set timeout to 20 seconds

beforeAll(async () => {
  process.env.DB_URI = 'mongodb://127.0.0.1:27017/testdb'; // Use a local test database
  await mongoose.connect(process.env.DB_URI);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase(); // Drop test database
  await mongoose.connection.close(); // Close connection
});

describe('Contact API Tests', () => {
  // Test retrieving submissions
  it('should retrieve contact submissions', async () => {
    const response = await request(app).get('/api/contact/submissions');
    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true); // Ensure the response is an array
  });

  // Test submitting a contact form
  it('should create a contact submission', async () => {
    const testContact = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message.',
    };

    const response = await request(app)
      .post('/api/contact/submit')
      .send(testContact);

    expect(response.statusCode).toBe(201); // Status 201 Created
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Contact form submitted successfully!');
    expect(response.body.data).toHaveProperty('id');
  });

  // Test validation error
  it('should return validation error when data is invalid', async () => {
    const invalidContact = {
      name: 'T', // Too short
      email: 'invalid-email',
      message: '',
    };

    const response = await request(app)
      .post('/api/contact/submit')
      .send(invalidContact);

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Validation error.');
    expect(Array.isArray(response.body.details)).toBe(true);
  });
});
