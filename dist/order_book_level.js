const axios = require('axios');

async function getOrderBook(marketPair, level) {
    const config = {
      method: 'get',
      url: `https://api.koinbx.com/orderbook?market_pair=${marketPair}&level=${level}`,
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

module.exports = { getOrderBook };
