const { MongoClient } = require('mongodb');

describe('Contact API Tests', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a contact submission', async () => {
    const contactCollection = db.collection('contacts');
    const mockContact = { name: 'John Doe', email: 'john@example.com', message: 'Hello!' };
    await contactCollection.insertOne(mockContact);

    const insertedContact = await contactCollection.findOne({ email: 'john@example.com' });
    expect(insertedContact).toEqual(expect.objectContaining(mockContact));
  });
});
