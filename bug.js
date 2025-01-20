const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling that doesn't properly handle the error
    console.error('Error:', err);
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Something went wrong');
  }
}