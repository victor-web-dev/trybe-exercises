const express = require('express');

const app = express();
app.use(express.json()); // translate to json if json is used in the body

// request: has the data that the client sends to the server
// response: this is where the server sends data back to the client


app.get('/', (req, res) => {
  res.status(200).send('Hello')
});

app.listen(3000, () => {
  console.log('API iniciada')
});