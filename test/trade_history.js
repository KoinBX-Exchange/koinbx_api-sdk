const { getTrades } = require('../dist/trade_history');
const { formatData } = require('../src/trade_history');

async function main() {
  const marketPair = 'ETH_BTC';

  try {
    const data = await getTrades(marketPair);
    const formattedData = formatData(data);
    console.log(formattedData);
  } catch (error) {
    console.log(error);
  }
}

main();