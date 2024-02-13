const { getOrderBook } = require('../dist/order_book_level');
const { formatData } = require('../src/order_book_level');

async function main() {
  const marketPair = 'ETH_BTC';
  const level = 1;

  try {
    const data = await getOrderBook(marketPair, level);
    const formattedData = formatData(data);
    console.log(formattedData);
  } catch (error) {
    console.log(error);
  }
}

main();