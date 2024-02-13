const { getOrderBook } = require('../dist/order_book');
const { formatData } = require('../src/order_book');

async function main() {
  const marketPair = 'AMI_INR';

  try {
    const data = await getOrderBook(marketPair);
    const formattedData = formatData(data);
    console.log(formattedData);
  } catch (error) {
    console.log(error);
  }
}

main();