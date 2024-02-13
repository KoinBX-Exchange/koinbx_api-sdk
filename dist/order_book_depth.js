const axios = require('axios');


async function getOrderBook(marketPair, depth) {
    const config = {
      method: 'get',
      url: `https://api.koinbx.com/orderbook?market_pair=${marketPair}&depth=${depth}`,
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
