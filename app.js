const app = require('./src/routes.js');
const PORT = process.env.PORT || 3000;
const getSwap = require('./src/contracts.js');
const cors = require('cors');

app.use(cors()); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.stdin.on('data', (input) => {
  const command = input.toString().trim(); // Trim whitespace from the input
  
  if (command === 'close') {
    console.log('Closing the server...');
    server.close(() => {
      console.log('Server closed.');
      console.log('Execuyting getSwap function...');
      getSwap();
    });
  }
});