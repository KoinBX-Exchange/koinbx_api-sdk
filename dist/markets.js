const axios = require('axios');

async function fetchData() {
  const config = {
    method: 'get',
    url: 'https://api.koinbx.com/markets',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchData };
