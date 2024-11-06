const axios = require('axios');

const API_URL = 'https://api-inference.huggingface.co/models/OrionStarAI/Orion-14B-Base';
const API_TOKEN = 'your_huggingface_api_token'; // Replace with your actual token

async function generateText(prompt) {
  try {
    const response = await axios.post(
      API_URL,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error generating text:', error);
  }
}

// Example usage  
generateText('Translate the following English text to French: "Hello, how are you?"');
