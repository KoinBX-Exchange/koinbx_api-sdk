const { getTicker } = require('../dist/ticker');
const { formatData } = require('../src/ticker');

async function main() {
  try {
    const data = await getTicker();
    const formattedData = formatData(data);
    console.log(formattedData);
  } catch (error) {
    console.log(error);
  }
}

main();