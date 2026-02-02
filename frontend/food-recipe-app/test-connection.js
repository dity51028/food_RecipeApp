// Test file to verify backend connection
// Run this with: node test-connection.js

const axios = require('axios');

const testConnection = async () => {
  try {
    console.log('Testing connection to backend...');
    const response = await axios.get('http://localhost:3001/recipe');
    console.log('✅ Connection successful!');
    console.log('Number of recipes:', response.data.length);
    console.log('First recipe:', response.data[0]?.title);
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Make sure your backend server is running on port 3001');
    }
  }
};

testConnection();
