const { getOrderBook } = require('../dist/order_book_depth');
const { formatData } = require('../src/order_book_depth');

async function main() {
  const marketPair = 'ETH_BTC';
  const depth = 5;

  try {
    const data = await getOrderBook(marketPair, depth);
    const formattedData = formatData(data);
    console.log(formattedData);
  } catch (error) {
    console.log(error);
  }
}

main();
