import products from './data/products';
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

const port = env.port || 5000;
app.listen(port, console.log(`This is port ${port}`));