const http = require('http');
const axios = require('axios');  // Import axios

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const getProductData = async (barcode) => {
  try {
    const response = await axios.get(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`);
    const product = response.data.product;

    console.log(`Product Name: ${product.product_name}`);
    console.log(`Nutritional Info:`, product.nutriments);

  } catch (error) {
    console.error('Error fetching product data:', error);
  }
};

// Test with a sample barcode
getProductData('737628064502');

