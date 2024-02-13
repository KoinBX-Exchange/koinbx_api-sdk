const { fetchData } = require('../dist/currencies');
const { formatData } = require('../src/currencies');

async function main() {
  try {
    const data = await fetchData();
    const formattedData = formatData(data);
    console.log(formattedData);
  } catch (error) {
    console.log(error);
  }
}

main();