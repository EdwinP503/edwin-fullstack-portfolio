const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  // Example: Get user data from the event body
  const { userId, data } = JSON.parse(event.body); 

  // Define the parameters for the DynamoDB "put" operation
  const params = {
    TableName: 'UserTable',  // Replace with your DynamoDB table name
    Item: {
      UserId: userId,  // User ID (partition key)
      Data: data,      // Any data you wish to store
      Timestamp: new Date().toISOString(), // Optional: timestamp
    },
  };

  try {
    // Write data to DynamoDB
    await dynamoDB.put(params).promise();

    // Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data saved successfully' }),
    };
  } catch (error) {
    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Unable to save data' }),
    };
  }
};
