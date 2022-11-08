const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(PORT, () =>
  console.log(`Server listening on port: ${PORT}`),
);