const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send('Hello World!');
});

app.put('/', (req, res) => {
  res.send('Hello Wdfghjorld!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
