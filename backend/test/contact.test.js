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
  it('should retrieve contact submissions', async () => {
    const response = await request(app).get('/api/contact/submissions');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Ensure the response is an array
  });

  it('should create a contact submission', async () => {
    const testContact = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message.',
    };

    const response = await request(app)
      .post('/api/contact')
      .send(testContact);

    expect(response.statusCode).toBe(201); // Status 201 Created
    expect(response.body.name).toBe(testContact.name);
    expect(response.body.email).toBe(testContact.email);
  });
});

module.exports = {
  testTimeout: 20000, // Set global timeout to 20 seconds
};