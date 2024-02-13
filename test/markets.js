const { fetchData } = require('../dist/markets');
const { formatData } = require('../src/markets');

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