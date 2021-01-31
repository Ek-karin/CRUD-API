//Require
const express = require('express');
const product_controller = require('./controllers/product.controller')

// App config
const app = express();
const port = process.env.PORT;
let server;

// Middlewares
app.use(express.json());
app.use('/api/products',product_controller);
app.get('/', (req,res) => {
    res.send("Welcome to products test API.")
})
app.get('*', (req,res) => {
    res.send("Invalid Endpoint.");
})

// API Endpoint
const main = () => {
    server = app.listen(port, () => {
        console.log(`URL = https://localhost:${port}/`);
    })
}

main();
