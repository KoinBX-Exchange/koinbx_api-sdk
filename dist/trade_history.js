const axios = require('axios');

async function getTrades(marketPair) {
  const config = {
    method: 'get',
    url: `https://api.koinbx.com/trades?market_pair=${marketPair}`,
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

module.exports = { getTrades };
